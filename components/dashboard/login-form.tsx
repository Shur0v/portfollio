"use client";

import { useState, type FormEvent } from "react";

export function LoginForm({ basePath }: { basePath: string }) {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const password = new FormData(event.currentTarget).get("password");
    const username = new FormData(event.currentTarget).get("username");
    try {
      const response = await fetch(`${basePath}/session`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      window.location.assign(basePath);
    } catch (error) { setError(error instanceof Error ? error.message : "Unable to sign in."); }
    finally { setBusy(false); }
  }
  return <form onSubmit={submit} className="tw:space-y-6">
    <label>Login ID<input type="text" name="username" autoComplete="username" required autoFocus maxLength={120} /></label>
    <label>Password<input type="password" name="password" autoComplete="current-password" required /></label>
    {error && <p role="alert" className="tw:text-red-300">{error}</p>}
    <button disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
  </form>;
}
