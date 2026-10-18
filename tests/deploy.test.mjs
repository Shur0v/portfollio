import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile, access, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const bash = process.env.BASH_EXECUTABLE || (process.platform === "win32" ? "C:/Program Files/Git/bin/bash.exe" : "bash");
const source = await readFile(new URL("../deploy/update-vps.sh", import.meta.url), "utf8");
const functions = source.slice(0, source.indexOf("trap recover EXIT"));
const shellQuote = value => `'${value.replaceAll("\\", "/").replaceAll("'", "'\\''")}'`;

test("VPS updater is valid Bash and retains production isolation guards", () => {
  const checked = spawnSync(bash, ["-n"], { input: source, encoding: "utf8" });
  assert.equal(checked.status, 0, checked.stderr || checked.error?.message);
  assert.match(source, /flock -n 9/);
  assert.match(source, /status --porcelain --untracked-files=all/);
  assert.match(source, /pg_dump --port=5432 --format=custom --dbname=shurov_portfolio/);
  assert.match(source, /\[ "\$available_kb" -ge "\$required_kb" \]/);
  assert.ok(source.indexOf("tar -C") < source.indexOf("app_command npm run db:setup"));
  assert.ok(source.indexOf("app_command env NODE_ENV=production npm run build") < source.indexOf('mv -T -- "$app" "$previous"'));
  assert.doesNotMatch(source, /systemctl (?:restart|reload|stop) (?:nginx|postgresql|docker)|pm2 |rm -rf|--insecure/);
});

for (const scenario of ["backup-failure", "before-candidate-move", "after-candidate-move", "stop-failure", "successful-update"]) {
  test(`VPS updater recovery: ${scenario}`, async () => {
    const directory = await mkdtemp(path.join(tmpdir(), "portfolio-deploy-test-"));
    try {
      const app = path.join(directory, "app");
      const candidate = path.join(directory, "candidate");
      const previous = path.join(directory, "previous");
      const commands = path.join(directory, "service-calls.txt");
      const oldMoved = scenario !== "backup-failure" && scenario !== "successful-update";
      const candidateMoved = scenario === "after-candidate-move" || scenario === "stop-failure";
      const initial = oldMoved ? previous : app;
      await mkdir(initial);
      await writeFile(path.join(initial, "identity.txt"), "previous-build");
      await mkdir(candidateMoved ? app : candidate);
      await writeFile(path.join(candidateMoved ? app : candidate, "identity.txt"), "new-build");
      const script = `${functions}
app=${shellQuote(app)}
candidate=${shellQuote(candidate)}
previous=${shellQuote(previous)}
backup=${shellQuote(directory)}
recovery_required=${scenario !== "successful-update"}
old_moved=${oldMoved}
candidate_moved=${candidateMoved}
systemctl() {
  printf '%s %s\\n' "$1" "$2" >> ${shellQuote(commands)}
  ${scenario === "stop-failure" ? '[ "$1" != stop ]' : "return 0"}
}
wait_for_health() { return 0; }
trap recover EXIT
exit ${scenario === "successful-update" ? 0 : 1}
`;
      const result = spawnSync(bash, ["-s"], { input: script, encoding: "utf8" });
      assert.equal(result.status, scenario === "successful-update" ? 0 : 1, result.stderr || result.error?.message);
      if (scenario === "successful-update") {
        await assert.rejects(access(commands));
      } else if (scenario === "stop-failure") {
        assert.equal(await readFile(path.join(app, "identity.txt"), "utf8"), "new-build");
        assert.equal(await readFile(path.join(previous, "identity.txt"), "utf8"), "previous-build");
        assert.match(result.stderr, /Manual recovery is required; no folders were moved/);
      } else {
        assert.equal(await readFile(path.join(app, "identity.txt"), "utf8"), "previous-build");
        const calls = await readFile(commands, "utf8");
        assert.ok(calls.includes("start shurov-portfolio.service"));
        assert.equal(calls.includes("stop shurov-portfolio.service"), oldMoved);
        assert.match(result.stderr, /Database and uploads were NOT rolled back/);
        if (candidateMoved) assert.equal(await readFile(path.join(`${candidate}.failed`, "identity.txt"), "utf8"), "new-build");
        else assert.equal(await readFile(path.join(candidate, "identity.txt"), "utf8"), "new-build");
      }
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
}
