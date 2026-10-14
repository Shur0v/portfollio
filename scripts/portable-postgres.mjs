import { spawn } from "node:child_process";
import { access, mkdir } from "node:fs/promises";
import path from "node:path";
import { tmpdir } from "node:os";
import EmbeddedPostgres from "embedded-postgres";

function execute(binary, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(binary, args, { windowsHide: true, stdio: ["pipe", "pipe", "pipe"] });
    let output = "";
    child.stdout.on("data", chunk => { output = (output + chunk).slice(-4000); });
    child.stderr.on("data", chunk => { output = (output + chunk).slice(-4000); });
    const timeout = setTimeout(() => {
      if (process.platform === "win32" && child.pid) {
        const cleanup = spawn("taskkill", ["/PID", String(child.pid), "/T", "/F"], { windowsHide: true, stdio: "ignore" });
        cleanup.on("error", () => child.kill());
      } else { child.kill(); }
      reject(new Error(`PostgreSQL command timed out: ${output}`));
    }, 120000);
    child.once("error", error => { clearTimeout(timeout); reject(error); });
    child.once("exit", code => {
      clearTimeout(timeout);
      child.stdout.destroy();
      child.stderr.destroy();
      if (code === 0) resolve();
      else reject(new Error(`PostgreSQL command failed (${code}): ${output}`));
    });
  });
}

export async function stopPostgres(directory) {
  const platform = process.platform === "win32" ? "windows" : process.platform;
  const { pg_ctl: control } = await import(`@embedded-postgres/${platform}-${process.arch}`);
  await execute(control, ["stop", "-D", directory, "-m", "fast", "-w", "-t", "60"]);
}

export async function startPostgres({ directory, port, user, password, temporary = false }) {
  const platform = process.platform === "win32" ? "windows" : process.platform;
  const { pg_ctl: control } = await import(`@embedded-postgres/${platform}-${process.arch}`);
  await mkdir(path.dirname(directory), { recursive: true });
  let initialized = true;
  try { await access(path.join(directory, "PG_VERSION")); }
  catch { initialized = false; }
  if (!initialized) {
    if (temporary && !path.resolve(directory).startsWith(path.resolve(tmpdir()) + path.sep)) throw new Error("Temporary PostgreSQL clusters must be inside the system temporary directory.");
    const cluster = new EmbeddedPostgres({ databaseDir: directory, port, user, password, authMethod: "scram-sha-256", persistent: true, initdbFlags: ["--encoding=UTF8", ...(temporary ? ["--no-sync"] : [])], onLog: message => console.log(message.trim()), onError: error => console.error(error) });
    await cluster.initialise();
  }
  await execute(control, ["start", "-D", directory, "-l", path.join(directory, "server.log"), "-o", `-p ${port} -h 127.0.0.1`, "-w", "-t", "60"]);
  return () => stopPostgres(directory);
}
