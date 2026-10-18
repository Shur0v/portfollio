# Shurov portfolio

Next.js App Router, React, TypeScript, Tailwind CSS v4, and PostgreSQL. The homepage and all nine original case studies are native TSX. No page reads or injects HTML at runtime. Projects and contact messages use PostgreSQL; uploaded image files remain on disk.

## Windows setup and running the project

### 1. Open the project in PowerShell

Use Node.js 22 or newer. Run these commands from the project folder, where `package.json` is located:

```powershell
cd "C:\Users\Backtend\OneDrive\Pictures\test\New folder\Portfollio\demo.themetorium.net\html\hektor"
node --version
npm --version
```

If Node or npm is not recognized, install Node.js and reopen PowerShell. Use `npm.cmd` instead of `npm` if PowerShell blocks `npm.ps1` with an execution-policy message; changing the system execution policy is not necessary.

### 2. Install the locked dependencies

```powershell
npm ci
```

Wait for installation to finish before starting the app. This reads `package-lock.json` and installs the exact dependency versions used by this project.

### 3. Enable dashboard sign-in

Create a local environment file only if it does not already exist, then open it:

```powershell
if (-not (Test-Path .env.local)) {
    Copy-Item .env.example .env.local
}
notepad .env.local
```

Set the following values. Replace both example values with your own; do not use the placeholders as credentials:

```dotenv
ADMIN_PASSWORD=your-unique-password-at-least-16-characters
ADMIN_USERNAME=your-login-id
ADMIN_ROUTE_KEY=your-random-64-character-hex-route-key
SESSION_SECRET=your-generated-random-secret
DATABASE_URL=postgresql://username:password@127.0.0.1:5432/portfolio
PORTFOLIO_DATA_DIR=./storage
```

Generate the session secret in PowerShell:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

For automatic secure setup, run `npm run admin:setup`. It generates a unique admin password, session secret, and unpredictable 64-hex-character route key while preserving existing valid settings. Read your ID/password and `ADMIN_ROUTE_KEY` privately in `.env.local`. Sign-in requires all four admin settings. Never commit or publish these values. Leave `APP_ORIGIN` unset for local development; restart the server after configuration changes. Changing the ID, password, route key, or session secret invalidates old sessions.

### 3b. Start PostgreSQL and initialize the database

**Local Windows option (no separate PostgreSQL installation):** leave `DATABASE_URL` empty initially, then run this in a dedicated PowerShell terminal:

```powershell
npm run db:local
```

Wait for `PostgreSQL is running`. This starts a real PostgreSQL server, bound to `127.0.0.1:54329`, creates the `portfolio` database, and saves a random database password and connection URL in `.env.local`. It does not replace another server's configured URL. Keep this terminal running while using the website. Database data persists under `%LOCALAPPDATA%\ShurovPortfolio\postgres`, outside OneDrive. The first initialization may take longer. Press **Ctrl+C** to shut down PostgreSQL safely after stopping the app.

In a second terminal in the same project folder, run:

```powershell
npm run db:setup
npm run db:check
```

`db:check` must display PostgreSQL's server version, database name, and project/message counts. Only then start the app. Check that `.env.local` also contains your `ADMIN_PASSWORD` and `SESSION_SECRET`; `db:local` creates database configuration, not dashboard credentials.

**Existing or hosted PostgreSQL option:** create an empty database for this portfolio, set its actual `DATABASE_URL` in `.env.local`, ensure the server is running, and use the same `db:setup` and `db:check` commands. Use your provider's verified TLS connection settings for remote servers. Do not run `db:local` when using another server. PostgreSQL 14 or newer is supported by the schema. The application never falls back to JSON when PostgreSQL is unavailable.

The first `db:setup` transaction imports existing `storage/projects.json` and `storage/messages.json` if present, otherwise inserts the original nine seed projects. It leaves the original JSON files and uploads untouched. Repeated setup is safe: it does not overwrite edited records or bring deleted projects back. Back up legacy data first and run setup before accepting writes. It is not a later incremental JSON import tool.

### 4. Start development mode

```powershell
npm run dev
```

Keep the terminal open and wait until Next.js prints `Ready`. Open these addresses in your browser:

- Portfolio: `http://localhost:3000`
- Real login: `http://localhost:3000/studio/<ADMIN_ROUTE_KEY>/login`
- Projects: `http://localhost:3000/studio/<ADMIN_ROUTE_KEY>`
- Contact inbox: `http://localhost:3000/studio/<ADMIN_ROUTE_KEY>/messages`

Replace `<ADMIN_ROUTE_KEY>` with the actual private key saved in `.env.local`. Sign in using `ADMIN_USERNAME` and `ADMIN_PASSWORD`. Source edits reload automatically in development. Press **Ctrl+C** to stop the server.

If port 3000 is already being used, choose a different port and use it in your browser:

```powershell
npm run dev -- --port 3001
```

The first page visit compiles its development route and can take longer than later visits. This project is currently inside OneDrive; if startup, installation, or builds are unusually slow, use a local non-synced working folder and run `npm ci` there. Keep your `.env.local` and real `storage` directory when transferring your own project.

### 5. Upload and publish projects

In the dashboard, click **New project**. Enter a title and URL slug, choose a category, add the description, and upload a cover image. You can also upload a hero image and up to 20 gallery images. JPG, PNG, GIF, and WebP inputs up to 10 MB are decoded and converted to WebP, resized within 1920 × 1920 without upscaling, and compressed at quality 78. Saved files must be at most 2 MB; larger results are rejected with a helpful message. Transparency and animation are preserved where supported, with a 120-frame and 40-megapixel decode limit. EXIF metadata is removed. Original template assets are unchanged. Tiny inputs can be smaller than their WebP encoding; a universally smaller byte count is not guaranteed.

Click **Save project** while **Published** is unchecked to keep the project as a draft. Check **Published** and save again to show it on the portfolio. Lower display-order numbers appear first. Select an existing project to edit it. Uploaded images and saved content persist across server restarts.

### 6. Run a production build locally

Stop the development server first. Then run:

```powershell
npm run build
npm start
```

Wait for the build to succeed and for the server to print `Ready`, then open `http://localhost:3000`. Use `localhost` for local dashboard testing. Rebuild after changing source files; dashboard content updates do not require rebuilding.

### 7. Verify the app

```powershell
npm run typecheck
npm run build
npm run test:db
npm test
```

The browser tests require Microsoft Edge and use ports 3100, 3101, and 3102. They launch a separate real PostgreSQL cluster on an available local port with isolated test credentials and temporary media storage. Keep the website test ports free. Database tests cover migration rollback, JSON import, idempotency, indexes, and a database restart. Do not run a development server while building or running tests because development and production both use the `.next` directory.

## Dashboard features

Create, edit, delete, order, draft, and publish projects. Upload cover images, hero images, and gallery images (JPG, PNG, GIF, WebP; 10 MB per file). Existing case studies preserve their original TSX layouts and media; the dashboard edits their main project information and appends uploaded gallery images. New projects use a matching case-study layout. The original repeated grid cards and additional category filters remain editable.

Contact submissions appear at `/studio/<ADMIN_ROUTE_KEY>/messages`. Messages are stored in PostgreSQL; email delivery is not configured.

### Customization coverage

The dashboard is a project manager and contact inbox, not a full landing-page CMS. It edits project titles, slugs, categories, descriptions, client/year/role/website details, cover/hero uploads, added galleries, display ordering, and publication status. Original case-study body sections and original embedded media remain authored in TSX; they are not individually editable through the dashboard.

Profile name, avatar, biography, homepage hero, services, client logos, testimonials, Highlights, FAQ, Creative Power, contact details, social links, navigation, footer, and SEO metadata do not currently have dashboard editors. There is no admin avatar/account-profile editor either. These require source edits until a site-content management feature is implemented. The dashboard uses its own responsive dark interface; the original design refers to the public portfolio, not a matching admin-page template.

Real admin access is exclusively under `/studio/<ADMIN_ROUTE_KEY>`. `/admin`, `/dashboard`, `/login`, `/wp-admin`, `/wp-login.php`, and their covered child routes are decoy pages: submitting any values shows a brief checking state and the requested access-denied hand icon. Decoys never submit or store credentials, issue an admin session, redirect to, or expose the real route. The old `/api/session` endpoint no longer exists. The real session endpoint requires the private route key, ID/password, same-origin validation, and rate limiting; the unpredictable path is an extra layer, not a replacement for authentication.

Published project edits increment a PostgreSQL revision through a database trigger. Open public pages check every 10 seconds and on focus, then reload fresh server-rendered content without rebuilding. The current theme and scroll position are preserved, and active/filled contact forms defer reload to avoid losing visitor input. Direct PostgreSQL updates to published project payloads also trigger refresh. Draft-only edits stay private. Hardcoded homepage/case-study sections still require source edits, as explained above; this does not add a full landing-page CMS.

## Source structure

- `app/(portfolio)` — public routes and original stylesheet loading.
- `components/portfolio-home.tsx` — homepage content and original DOM structure.
- `components/projects` — all original case studies and the uploaded-project layout.
- `components/project-grid.tsx` — project cards, driven by dashboard data.
- `components/portfolio-runtime.tsx` — ordered initialization of the original animation libraries after React hydration.
- `app/studio/[key]` and `components/dashboard` — protected Tailwind dashboard; common login routes render decoys.
- `app/api` — authenticated project management, upload, sign-in, and contact endpoints.
- `lib/database.ts`, `lib/projects.ts`, `lib/messages.ts` — pooled PostgreSQL queries and transactional project writes.
- `database/001-initial.sql` — schema, unique project URLs, and query indexes.
- `database/002-live-content.sql` — published-content revision trigger and safe, versioned upgrade.
- `lib/optimize-image.ts` — real decoding and bounded WebP compression of new uploads.
- `data/projects.seed.json` — initial project content, imported once during database setup.
- `public/assets` — original images, fonts, CSS, and animation scripts.
- `storage` — uploaded media and preserved legacy JSON, excluded from Git; not the live database.

The original root HTML files and `assets` directory remain as a visual reference and backup only. They are not public Next.js pages. Old `index.html` and `single-project-*.html` URLs redirect to Next.js routes. `scripts/convert-pages.mjs` is a one-time migration utility; rerunning it replaces generated TSX and seed data, so edit the TSX directly going forward.

The original case-study menus also contain template-only blog, dummy, and element-demo entries. Their visual content remains intact, but those demonstration destinations are not implemented portfolio routes. Links to existing portfolio sections use their actual destinations.

## Design preservation

The original CSS, responsive breakpoints, GSAP effects, cursor, transitions, filtering, Swiper, and Fancybox remain in use. Tailwind utilities use the `tw:` prefix and omit Preflight to avoid resetting the portfolio's established styles. Add new Tailwind utilities as `tw:flex`, `tw:md:grid-cols-2`, etc. Public navigation uses normal links so page transitions initialize cleanly on each document load.

## Deployment and persistence

Deploy as a Node.js server connected to PostgreSQL. Set `DATABASE_URL`, run `npm run db:setup` during deployment, and use a persistent writable media directory through `PORTFOLIO_DATA_DIR`. Set `APP_ORIGIN` to the public origin (for example `https://your-domain.com`). Production sign-in cookies require HTTPS. Restrict inbound request bodies to 11 MB in your reverse proxy. Do not expose the media directory directly as a static directory.

Projects and messages now live in PostgreSQL, with parameterized queries, a reusable pool capped at 10 connections per Node process, transactional writes, unique URLs, published/order indexes, and a newest-first inbox index. PostgreSQL is not automatically the fastest database in every situation; actual response times also depend on server location, query plans, connection limits, media delivery, and hosting. Site reads do not open and parse entire JSON files anymore.

Back up PostgreSQL using your provider's backup system or `pg_dump`, and back up `PORTFOLIO_DATA_DIR/uploads` separately. Copying only `storage` is no longer a complete website backup. Do not copy a live PostgreSQL cluster directory as a substitute for a database backup. The bundled local server is for development; use a managed or properly maintained PostgreSQL service in production. After schema setup, production runtime credentials only need SELECT/INSERT/UPDATE/DELETE on portfolio tables; use separate migration credentials for DDL when possible.

Shared PostgreSQL supports concurrent application processes. Multiple replicas or serverless hosting still require shared/external media storage and an appropriate total database connection budget. Rate limits are in-memory and reset when the process restarts. Dashboard passwords continue to use server environment configuration; the database migration does not add full-profile/landing-page CMS editors.

## Verification

Verified on October 4, 2026: TypeScript checking and the production build pass, and all five Microsoft Edge browser tests pass without captured hydration errors or uncaught browser exceptions. The production dependency audit reports zero vulnerabilities.

Rechecked on October 11, 2026: TypeScript checking, production build, and all five existing browser checks pass. The added dashboard login/protected-route/search/responsive-editor/logout test also passes on its focused rerun after correcting a test selector that matched Next.js's route announcer. Dashboard screenshots and horizontal-overflow checks cover 1440px, 768px, and 390px. This verifies the implemented project manager, not the missing full-profile/landing-page CMS described above.

PostgreSQL migration verified on October 11, 2026: the local PostgreSQL 18.4 server is reachable, uses UTF8, and contains the original nine projects. TypeScript and production build pass; the database migration/rollback/Unicode/index/idempotency/restart test passes; all six browser tests pass together against an isolated PostgreSQL database. The production dependency audit reports zero vulnerabilities. Public layout comparisons still pass at all three widths in both themes.

Rechecked on October 18, 2026: TypeScript checking, production build, the PostgreSQL migration/restart test, and all eight Microsoft Edge browser tests pass. The added checks cover private admin login, decoy routes, WebP conversion and resizing, and automatic refresh of already-open public project pages after published corrections. These are local checks; they do not establish that the VPS has been deployed or turn the project dashboard into a full-site CMS.

For deployment on the existing multi-project VPS, see `deploy/README.md`. The templates are isolated additions, not a claim that the VPS is already deployed. SSH access, the domain's corrected DNS record, a free app port, existing proxy configuration checks, and HTTPS verification are required first.

```sh
npm run typecheck
npm run build
npm run test:db
npm test
```

Browser tests use Microsoft Edge and ports 3100, 3101, and 3102. They launch isolated production servers backed by a separate real PostgreSQL cluster, compare desktop/tablet/mobile geometry and scrolled sections in both display themes to the original, exercise all case-study routes, and test authenticated uploads, galleries, drafts, publishing, ordering, concurrent URL conflicts, PostgreSQL record storage, persistence in a fresh server process, deletion, and actual contact-form delivery to the protected inbox. Tests never connect to the real portfolio database or write to its media directory.
