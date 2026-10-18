import { readFile, writeFile } from "node:fs/promises";
import { randomBytes } from "node:crypto";
import { loadEnvironment } from "./database-setup.mjs";

loadEnvironment();
let environment = "";
try { environment = await readFile(".env.local", "utf8"); }
catch (error) { if (error.code !== "ENOENT") throw error; }
const settings = {
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || "shurov",
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || randomBytes(24).toString("base64url"),
  ADMIN_ROUTE_KEY: process.env.ADMIN_ROUTE_KEY || randomBytes(32).toString("hex"),
  SESSION_SECRET: process.env.SESSION_SECRET || randomBytes(32).toString("hex"),
};
if (!/^[a-zA-Z0-9_.-]{3,120}$/.test(settings.ADMIN_USERNAME) || settings.ADMIN_PASSWORD.length < 16 || !/^[a-f0-9]{64}$/.test(settings.ADMIN_ROUTE_KEY) || settings.SESSION_SECRET.length < 32) throw new Error("Invalid admin configuration. Check the existing settings before continuing.");
for (const [key, value] of Object.entries(settings)) {
  const line = `${key}=${JSON.stringify(value)}`;
  const pattern = new RegExp(`^${key}=.*$`, "m");
  environment = pattern.test(environment) ? environment.replace(pattern, () => line) : `${environment}\n${line}\n`;
}
await writeFile(".env.local", environment, { mode: 0o600 });
console.log("Admin credentials and private route are saved in .env.local. Existing valid credentials are preserved; nothing is committed to Git. Restart the app after setup.");
