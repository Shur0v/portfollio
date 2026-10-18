import { defineConfig } from "@playwright/test";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { tmpdir } from "node:os";

const existingStorage = process.env.PLAYWRIGHT_STORAGE_DIR;
const testStorage = existingStorage && path.dirname(existingStorage) === tmpdir() && path.basename(existingStorage).startsWith("portfolio-test-media-")
  ? existingStorage
  : path.join(tmpdir(), `portfolio-test-media-${randomUUID()}`);
process.env.PLAYWRIGHT_STORAGE_DIR = testStorage;

export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.ts",
  globalTeardown: "./scripts/test-database-teardown.mjs",
  fullyParallel: false,
  workers: 1,
  timeout: 180000,
  use: { baseURL: "http://localhost:3100", channel: "msedge", trace: "retain-on-failure" },
  webServer: [
    {
      command: "node scripts/test-server.mjs",
      url: "http://localhost:3100/admin",
      timeout: 180000,
      env: { ADMIN_USERNAME: "test-admin", ADMIN_ROUTE_KEY: "a".repeat(64), ADMIN_PASSWORD: "test-only-password-2026", SESSION_SECRET: "test-only-session-secret-at-least-thirty-two-characters", APP_ORIGIN: "http://localhost:3100", PORTFOLIO_DATA_DIR: testStorage },
    },
    { command: "node scripts/reference-server.mjs", url: "http://127.0.0.1:3101", timeout: 15000 },
  ],
});
