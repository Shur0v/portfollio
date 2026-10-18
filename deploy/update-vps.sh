#!/usr/bin/env bash
set -Eeuo pipefail
umask 077

app=/var/www/shurov
owner=shurov-portfolio
service=shurov-portfolio.service
shared=/srv/shurov-portfolio/shared
settings=$shared/production.env
runtime=/opt/shurov-portfolio/node/bin
releases=/var/www/shurov-releases
backups=/var/backups/shurov-portfolio
repository=https://github.com/Shur0v/portfollio.git
revision=${1:-}
candidate=
previous=
backup=
recovery_required=false
old_moved=false
candidate_moved=false

die() {
  printf '%s\n' "$*" >&2
  exit 1
}

app_git() {
  runuser -u "$owner" -- git "$@"
}

app_command() {
  (
    cd "$candidate"
    runuser -u "$owner" -- env -i \
      HOME=/srv/shurov-portfolio USER="$owner" LOGNAME="$owner" \
      PATH="$runtime:/usr/sbin:/usr/bin:/sbin:/bin" \
      npm_config_cache="$shared/npm-cache" \
      NEXT_TELEMETRY_DISABLED=1 CI=1 \
      nice -n 10 "$@"
  )
}

wait_for_health() {
  local response attempt
  for attempt in {1..30}; do
    if response=$(curl --fail --silent --connect-timeout 2 --max-time 5 \
      http://127.0.0.1:3047/api/health) && [ "$response" = '{"status":"ok"}' ]; then
      return 0
    fi
    sleep 2
  done
  return 1
}

recover() {
  local result=$?
  trap - EXIT INT TERM
  if [ "$result" -ne 0 ]; then
    printf '\nUpdate failed. Preserved files: %s\n' "${backup:-no backup created yet}" >&2
    if [ "$recovery_required" = true ]; then
      set +e
      if [ "$old_moved" = true ]; then
        if ! systemctl stop "$service"; then
          printf 'Could not stop the portfolio. Manual recovery is required; no folders were moved.\n' >&2
          exit "$result"
        fi
        if [ "$candidate_moved" = true ]; then
          if ! mv -T -- "$app" "$candidate.failed"; then
            printf 'Could not preserve the failed application. Manual recovery is required.\n' >&2
            exit "$result"
          fi
        fi
        if ! mv -T -- "$previous" "$app"; then
          printf 'Could not restore the previous application. Manual recovery is required.\n' >&2
          exit "$result"
        fi
      fi
      if systemctl start "$service" && wait_for_health; then
        printf 'The previous portfolio application is running again. Database and uploads were NOT rolled back.\n' >&2
      else
        printf 'Portfolio recovery needs attention. Run: journalctl -u %s -n 80 --no-pager\n' "$service" >&2
      fi
    fi
  fi
  exit "$result"
}

trap recover EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

[ "$(id -u)" = 0 ] || die 'Run this updater as root on the VPS.'
[ "$(uname -s)" = Linux ] || die 'This updater is for the existing Linux VPS only.'
[[ "$revision" =~ ^[0-9a-f]{40}$ ]] || die 'Supply the full verified Git commit SHA as the only argument.'
[ "$#" = 1 ] || die 'Exactly one Git commit SHA is required.'

for command in runuser git systemctl curl flock realpath stat install mktemp cp tar mv pg_dump pg_restore psql nice du df awk grep; do
  command -v "$command" >/dev/null || die "Missing required command: $command"
done
exec 9>/run/lock/shurov-portfolio-deploy.lock
flock -n 9 || die 'Another portfolio update is already running.'

[ -d "$app/.git" ] && [ ! -L "$app" ] && [ "$(realpath "$app")" = "$app" ] || die 'Expected an existing real Git checkout at /var/www/shurov.'
[ -s "$app/.next/BUILD_ID" ] || die 'The existing production build is missing.'
[ -f "$settings" ] && [ ! -L "$settings" ] || die 'The existing private production settings file is missing or is a symlink.'
[ "$(realpath "$app/.env.local")" = "$settings" ] || die 'The application must link to the existing production settings.'
runuser -u "$owner" -- test -r "$settings" || die 'The portfolio user cannot read its existing production settings.'
[ -d "$shared/storage" ] && [ ! -L "$shared/storage" ] || die 'Expected the existing shared uploads directory.'
[ -x "$runtime/node" ] && [ -x "$runtime/npm" ] || die 'The dedicated portfolio Node runtime is missing.'
[ "$(systemctl show "$service" -p WorkingDirectory --value)" = "$app" ] || die 'The portfolio service is not configured to run from /var/www/shurov.'
[ "$(systemctl show "$service" -p User --value)" = "$owner" ] || die 'The portfolio service uses an unexpected account.'
systemctl show "$service" -p ExecStart --value | grep -F -- "$app/node_modules/next/dist/bin/next start" >/dev/null || die 'The portfolio service has an unexpected start command.'
systemctl is-active --quiet "$service" || die 'The existing portfolio service must be running before an update.'
[ "$(app_git -C "$app" remote get-url origin)" = "$repository" ] || die 'The current checkout has an unexpected GitHub remote.'
[ -z "$(app_git -C "$app" status --porcelain --untracked-files=all)" ] || die 'The existing checkout has local changes. Back up and review them before updating.'
app_git -C "$app" cat-file -e "$revision^{commit}" || die 'Fetch the requested commit before running the updater.'

"$runtime/node" --env-file="$settings" -e '
try {
const url = new URL(process.env.DATABASE_URL);
if (Number(process.versions.node.split(".")[0]) < 22) throw new Error("Node.js 22 or newer is required.");
if (url.protocol !== "postgresql:" || url.hostname !== "127.0.0.1" || url.port !== "5432" || url.pathname !== "/shurov_portfolio" || url.username !== "shurov_portfolio") throw new Error("Unexpected PostgreSQL target. Stop and review configuration.");
if (process.env.APP_ORIGIN !== "https://shurov.cloud" || process.env.PORTFOLIO_DATA_DIR !== "/srv/shurov-portfolio/shared/storage") throw new Error("Unexpected production origin or storage path.");
for (const key of ["ADMIN_USERNAME", "ADMIN_PASSWORD", "ADMIN_ROUTE_KEY", "SESSION_SECRET"]) if (!process.env[key]) throw new Error("Missing private dashboard configuration.");
} catch {
  console.error("Private configuration failed validation. Review the existing Node version, database target, origin, storage path, and dashboard settings privately.");
  process.exit(1);
}
'
wait_for_health || die 'The existing portfolio database health check is failing.'
curl --fail --silent --show-error --connect-timeout 5 --max-time 20 \
  https://shurov.cloud/api/health | grep -Fx '{"status":"ok"}' >/dev/null || die 'The existing public HTTPS health check is failing.'

for directory in "$releases" "$backups"; do
  [ ! -L "$directory" ] || die "Refusing a symlink directory: $directory"
  if [ -e "$directory" ]; then
    [ -d "$directory" ] && [ "$(stat -c %u "$directory")" = 0 ] || die "Expected a root-owned directory: $directory"
    [ "$(realpath "$directory")" = "$directory" ] || die "Unexpected resolved directory: $directory"
  fi
done
install -d -o root -g root -m 0755 "$releases"
install -d -o root -g root -m 0700 "$backups"
[ "$(stat -c %d "$app")" = "$(stat -c %d "$releases")" ] || die 'The application and candidate must be on the same filesystem for a safe switch.'
app_kb=$(du -sk "$app" | awk '{print $1}')
storage_kb=$(du -sk "$shared/storage" | awk '{print $1}')
database_bytes=$(runuser -u postgres -- psql --port=5432 --dbname=shurov_portfolio --tuples-only --no-align --command="SELECT pg_database_size(current_database())")
[[ "$database_bytes" =~ ^[0-9]+$ ]] || die 'Could not estimate the PostgreSQL backup size.'
backup_kb=$((storage_kb + database_bytes / 1024 + 1048576))
required_kb=$((app_kb * 2 + backup_kb + 1048576))
available_kb=$(df -Pk "$releases" | awk 'END {print $4}')
[ "$available_kb" -ge "$required_kb" ] || die 'Not enough free disk space for a candidate, backups, and a safety margin.'
backup_available_kb=$(df -Pk "$backups" | awk 'END {print $4}')
[ "$backup_available_kb" -ge "$backup_kb" ] || die 'Not enough free disk space on the backup filesystem.'
stamp=$(date -u +%Y%m%d-%H%M%S)
candidate=$(mktemp -d "$releases/candidate-$stamp-XXXXXXXX")
previous=$candidate.previous
backup=$(mktemp -d "$backups/update-$stamp-XXXXXXXX")
chown "$owner:$owner" "$candidate"
chmod 0750 "$candidate"
printf 'Requested commit: %s\nBackup folder: %s\nCandidate folder: %s\n' "$revision" "$backup" "$candidate"
app_git -C "$app" rev-parse HEAD > "$backup/previous-commit.txt"
printf '%s\n' "$revision" > "$backup/requested-commit.txt"
printf '%s\n' "$previous" > "$backup/previous-application-path.txt"
systemctl cat "$service" > "$backup/portfolio-service.txt"
cp -a -- "$settings" "$backup/production.env"

printf '\nPreparing an isolated candidate; the current portfolio remains online.\n'
app_git -C "$candidate" init --quiet
app_git -C "$candidate" fetch --quiet --no-tags "$app" "$revision"
app_git -C "$candidate" checkout --quiet --detach FETCH_HEAD
app_git -C "$candidate" remote add origin "$repository"
[ "$(app_git -C "$candidate" rev-parse HEAD)" = "$revision" ] || die 'Candidate commit verification failed.'
runuser -u "$owner" -- ln -s "$settings" "$candidate/.env.local"
app_command npm ci --include=dev --no-audit --no-fund
app_command npm run typecheck

printf '\nBriefly stopping ONLY the portfolio for a consistent database/uploads backup.\n'
recovery_required=true
systemctl stop "$service"
runuser -u postgres -- pg_dump --port=5432 --format=custom --dbname=shurov_portfolio > "$backup/database.dump"
pg_restore --list < "$backup/database.dump" > "$backup/database-contents.txt"
tar -C "$shared" -czf "$backup/storage.tar.gz" storage
systemctl start "$service"
wait_for_health || die 'The original portfolio did not recover after its backup.'
recovery_required=false

printf '\nApplying additive migrations and building the candidate.\n'
app_command npm run db:setup
app_command npm run db:check
app_command env NODE_ENV=production npm run build
test -s "$candidate/.next/BUILD_ID"
install -d -o "$owner" -g "$owner" -m 0750 "$candidate/.next/cache"
[ ! -e "$previous" ] && [ ! -L "$previous" ] || die 'Previous application backup target already exists.'
[ ! -e "$candidate.failed" ] && [ ! -L "$candidate.failed" ] || die 'Failed application preservation target already exists.'
[ "$(realpath "$app")" = "$app" ] && [ ! -L "$app" ] || die 'The application path changed during the update.'

printf '\nSwitching ONLY the portfolio service to the new application.\n'
recovery_required=true
systemctl stop "$service"
trap '' INT TERM
mv -T -- "$app" "$previous"
old_moved=true
mv -T -- "$candidate" "$app"
candidate_moved=true
trap 'exit 130' INT
trap 'exit 143' TERM
systemctl start "$service"
wait_for_health || die 'The new portfolio failed its localhost database health check.'
curl --fail --silent --show-error --connect-timeout 5 --max-time 20 \
  https://shurov.cloud/api/health | grep -Fx '{"status":"ok"}' >/dev/null || die 'The new portfolio failed its public HTTPS health check.'
curl --fail --silent --show-error --connect-timeout 5 --max-time 30 \
  --output /dev/null https://shurov.cloud/ || die 'The new portfolio homepage failed its HTTPS check.'
recovery_required=false
printf '\nPortfolio update successful: %s\nWebsite: https://shurov.cloud\nBackups: %s\nPrevious application: %s\n' "$revision" "$backup" "$previous"
printf 'Existing admin credentials, uploads, database records, HTTPS configuration, and other projects were retained.\n'
