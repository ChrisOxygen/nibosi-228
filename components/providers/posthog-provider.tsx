"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { POSTHOG_HOST } from "@/lib/posthog";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ph = usePostHog();

  useEffect(() => {
    if (!ph) return;
    const qs = searchParams.toString();
    const url = `${window.location.origin}${pathname}${qs ? `?${qs}` : ""}`;
    ph.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams, ph]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: POSTHOG_HOST,
      capture_pageview: false,
      capture_pageleave: true,
      person_profiles: "identified_only",
    });
    // Tag every event with the landing page name so it's identifiable in PostHog
    posthog.register({ landing_page: "Nibosi-2628" });
  }, []);

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </PHProvider>
  );
}
