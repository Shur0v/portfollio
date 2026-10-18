# Upgrade the existing VPS portfolio to the content CMS

The working application is `/var/www/shurov`, the private configuration is `/srv/shurov-portfolio/shared/production.env`, media is `/srv/shurov-portfolio/shared/storage`, and the service is `shurov-portfolio.service` on localhost port 3047. Do not change the other applications, their PM2 processes, Docker containers, databases, Node runtime, or Nginx virtual hosts. Existing HTTPS and private admin credentials are retained.

## 1. Inspect and back up before updating

Check `systemctl --no-pager status shurov-portfolio.service`, `git -C /var/www/shurov status --short` as the `shurov-portfolio` user, and available disk space. Stop if the checkout contains uncommitted source changes; preserve and review them before a deployment. Record the current commit, public health response, and both other applications' baseline health. Dreamshop's domain/certificate were already expired during the initial deployment; do not attempt to fix that unrelated condition as part of this upgrade.

Create a new timestamped backup directory owned by root with mode 0700. Back up the `shurov_portfolio` database using `runuser -u postgres -- pg_dump --port=5432 --format=custom shurov_portfolio` redirected by root into that directory. Back up the actual production environment file and uploads separately, with root-only permissions; copying a `.env.local` symlink alone is not a configuration backup. Preserve the current application build and service/drop-in files as well. Do not print credentials or put them into Git, shell history, or chat.

## 2. Build a candidate while the current website stays running

Create a new release directory under `/srv/shurov-portfolio/releases`, owned by `shurov-portfolio`, and download the verified new GitHub commit there. Use the project's existing private Node installation, `/opt/shurov-portfolio/node/bin`, on PATH. Link the candidate's ignored `.env.local` to the existing production environment file. Do not generate a replacement password, route key, session secret, or database URL.

Run `npm ci --include=dev` as the dedicated user, with `npm_config_cache=/srv/shurov-portfolio/shared/npm-cache`. Run `npm run db:setup`, `npm run db:check`, `npm run typecheck`, and a production build. Use reduced CPU priority for the build if desired. Never build directly into the running application's `.next` directory. A candidate can be smoke-tested on another verified unused localhost port; do not expose a production admin session over public HTTP.

Migrations 3 and 4 add the website content documents, original defaults, revision notifications, and automatic conflict versions. They are transactional, serialized, additive, and idempotent. They do not reset existing projects, messages, image files, passwords, or existing edits. Existing project-only application code remains compatible with these additive tables/triggers during preparation and rollback. Use PostgreSQL 14 or newer; the current VPS has PostgreSQL 17.

## 3. Switch only the portfolio service

After the candidate build and health check pass, stop only `shurov-portfolio.service`, preserve `/var/www/shurov` under a new backup name, and move the candidate to the fixed `/var/www/shurov` path. Verify every absolute source and destination before moving; never move or delete `/var/www` itself. Keep the dedicated user ownership, readable private environment symlink, and writable `.next/cache` directory. Then start only `shurov-portfolio.service` and check localhost `/api/health` before public HTTPS health.

The existing location drop-in should continue to use `WorkingDirectory=/var/www/shurov`, the Next executable under that path, and `ReadWritePaths=/srv/shurov-portfolio/shared/storage /var/www/shurov/.next/cache`. Do not change the existing proxy upstream port or expose the source directory as an Nginx static root.

No Nginx change is required for this feature: SSE sends `X-Accel-Buffering: no` and a heartbeat every 15 seconds, compatible with the current 60-second proxy timeout. For many simultaneous tabs, enabling HTTP/2 on only this domain's HTTPS virtual host avoids HTTP/1.x per-origin connection limits; validate the installed Nginx version/configuration before changing it. Do not disable TLS verification or weaken production session cookies.

## 4. Verify the live CMS

1. Sign into the same private `/studio/<ADMIN_ROUTE_KEY>/login` address using the existing ID/password.
2. Click **Edit website sections**. Edit one harmless hero/about field and save.
3. Keep the public page open in another window. Confirm it refreshes with the edit, including over public HTTPS, then restore the original value if this was only a test.
4. Test an image replacement, repeatable FAQ/service item, section visibility/order, and a case-study body correction. Check a second device and both display themes.
5. Select the global page and confirm the Balanced/High-quality/Compact compression setting. New uploads return WebP automatically; existing assets are not bulk-recompressed.
6. Confirm projects, drafts, messages, uploads, and the other two applications match their pre-upgrade state.

Updates are pushed after a database transaction commits, not after a fixed polling delay. Network and full-page animation initialization still take time. Filled contact forms deliberately wait before reloading; admin editors never auto-refresh over unsaved work. A disconnected stream has reconnect and polling fallback. Events expose only revision numbers.

## Rollback

If the new application fails, stop only its service, preserve the failed candidate separately, restore the prior application at `/var/www/shurov`, and start only the portfolio service. Keep the database and uploads intact. Do not drop CMS tables or restore an old database backup automatically: that would discard new edits or messages. Investigate and repair using the preserved data.

Certificate issuance previously configured scheduled renewal. Also ensure a certificate-specific post-renewal hook reloads Nginx after validating its configuration; do not replace other projects' renewal hooks or renew their certificates as part of this CMS upgrade.
