"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

export function DecoyLogin() {
  const [state, setState] = useState<"idle" | "busy" | "denied">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setState("busy");
    timer.current = setTimeout(() => setState("denied"), 900);
  }
  return <main className="dashboard"><div className="tw:mx-auto tw:mt-16 tw:max-w-md">
    <h1 className="tw:text-3xl">Admin login</h1>
    {state === "denied" ? <div role="status" className="tw:py-12 tw:text-center"><span role="img" aria-label="Access denied" className="tw:text-7xl">🖕</span><p className="tw:mt-6">Access denied.</p></div> :
      <form onSubmit={submit} className="tw:space-y-6">
        <label>Login ID<input type="text" autoComplete="off" /></label>
        <label>Password<input type="password" autoComplete="off" /></label>
        <button disabled={state === "busy"}>{state === "busy" ? "Checking…" : "Sign in"}</button>
      </form>}
  </div></main>;
}
