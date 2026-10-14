import { redirect } from "next/navigation";
import { authenticated, authConfigured } from "../../../lib/auth";
import { LoginForm } from "../../../components/dashboard/login-form";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  if (await authenticated()) redirect("/dashboard");
  return <div className="tw:mx-auto tw:mt-16 tw:max-w-md">
    <a href="/">← Portfolio</a>
    <h1 className="tw:mt-8 tw:text-3xl">Project dashboard</h1>
    {authConfigured() ? <LoginForm /> : <p role="status">Set ADMIN_PASSWORD (at least 16 characters) and SESSION_SECRET (at least 32 characters) in .env.local, then restart the server to enable sign-in.</p>}
  </div>;
}
