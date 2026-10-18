"use client";

import { useSiteContent } from "./site-content-provider";

export function PrivacyContent() {
  const content = useSiteContent("privacy");
  return <main className="dashboard"><article className="tw:mx-auto tw:max-w-2xl tw:space-y-6">
    <a href={content.values["policy-1"]}>{content.values["policy-2"]}</a><h1>{content.values["policy-3"]}</h1>
    <p>{content.values["policy-4"]}</p>
    <p>{content.values["policy-5"]}</p>
    <p>{content.values["policy-6"]}</p>
  </article></main>;
}
