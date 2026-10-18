# Isolated VPS deployment

The target VPS is `72.60.205.98`, and the requested domain is `shurov.cloud`. These files are templates, not proof that deployment has occurred. Authentication and server inspection are required before applying them.

## Protect existing projects

- Inventory listeners, running services, Node versions, PostgreSQL clusters, Nginx virtual hosts, disk space, and RAM first. Record the other two applications' health responses before and after deployment.
- Never stop, restart, delete, rename, or replace another application's service, process, database, uploads, virtual host, Node installation, or directory.
- Use a new `/srv/shurov-portfolio` tree, dedicated `shurov-portfolio` OS user, dedicated PostgreSQL role/database, and `shurov-portfolio.service`. The example port is 3047: confirm it is free or change both templates to a verified unused port.
- Install Node 22 in the project's own `/opt/shurov-portfolio/node` runtime path rather than replacing a globally installed version used by existing applications.
- If PostgreSQL is already available, create only a new role/database on it; do not restart or upgrade the existing cluster. If a new cluster is needed, check available ports and inspect the existing database services before installation.
- Add only a new domain-specific Nginx virtual host. If `shurov.cloud` is already served by another project on this VPS, stop and ask for a conflict-resolution decision. Do not replace the default server or another project's configuration.
- Back up the proxy configuration. Run `nginx -t` before a graceful reload. Never restart the entire reverse proxy just to deploy this application. Roll back only this project's new virtual host if validation fails.

## Application installation

Clone `https://github.com/Shur0v/portfollio.git` into a new release directory and deploy a verified commit from `main`. Keep a previous release for rollback. Install dependencies and run `npm run build` as the dedicated OS user; use the project's private Node runtime and ensure the runtime's bin directory is on PATH for npm scripts.

Keep production configuration outside the repository at `/srv/shurov-portfolio/shared/production.env`, readable only by authorized administrators and the service as needed. Configure `DATABASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `ADMIN_ROUTE_KEY`, `SESSION_SECRET`, `APP_ORIGIN=https://shurov.cloud`, and `PORTFOLIO_DATA_DIR=/srv/shurov-portfolio/shared/storage`. Never commit these values or include them in shell history. Link this configuration to the release's ignored `.env.local` for setup/build, or load it into the setup process environment.

Run `npm run db:setup` with appropriate migration permissions, then `npm run db:check`. Existing project data is retained by versioned migrations. Use separate migration credentials where possible; runtime requires access to portfolio tables and the revision row/trigger, not PostgreSQL superuser access.

Create writable media and `.next/cache` directories owned by the dedicated service user. Switch `/srv/shurov-portfolio/current` only after a successful build. Install the service template with the verified runtime path and unused port, then start only `shurov-portfolio.service`.

## DNS and HTTPS

Point the domain's A record at `72.60.205.98`. Check AAAA records too: remove incorrect IPv6 records or configure a working VPS IPv6 address. The domain was observed pointing at `2.57.91.91` before deployment; DNS must be corrected before certificate validation.

Use a webroot ACME challenge under this project's dedicated `shared/acme` folder to issue a certificate without an automatic tool rewriting other virtual hosts. Add a domain-specific HTTPS server block using that certificate, and redirect only this domain's HTTP requests to HTTPS. Validate and gracefully reload the existing proxy. Production admin cookies are secure and require HTTPS; do not weaken them for an IP-only deployment.

## Verify and roll back

Check `/api/health` through the localhost app port and public HTTPS domain. Check original portfolio styles, project routes, optimized WebP uploads, private login, decoy logins, contact inbox, and published-content live refresh. Compare the other two applications with their pre-deployment health checks. Back up PostgreSQL and uploads separately.

If this deployment fails, stop only its own service, restore its previous release/virtual host, validate the proxy configuration, and gracefully reload. Do not remove PostgreSQL data or run destructive rollback migrations.
