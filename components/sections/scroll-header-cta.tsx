"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { Button } from "../ui/button";
import { Spinner } from "@/components/ui/spinner";
import { FaGripLinesVertical } from "react-icons/fa6";
import { COPY } from "@/constants/copy";
import { EVENTS } from "@/lib/posthog";

const MarqueeItem = () => (
  <div className="flex items-center">
    <span className="shrink-0 text-brand-primary font-sans font-semibold">
      {COPY.MARQUEE_ITEM_1}
    </span>
    <span className="shrink-0 text-gray-300 mx-4">
      <FaGripLinesVertical />
    </span>
    <span className="shrink-0 text-brand-primary font-sans font-semibold">
      {COPY.MARQUEE_ITEM_2}
    </span>
    <span className="shrink-0 text-gray-300 mx-4">
      <FaGripLinesVertical />
    </span>
  </div>
);

export default function ScrollHeaderCTA() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const ph = usePostHog();

  function handleOrder() {
    ph?.capture(EVENTS.CTA_CLICKED, { location: "scroll_header" });
    startTransition(() => {
      router.push("/checkout");
    });
  }

  return (
    <section className="flex items-center p-3 gap-4 overflow-hidden border-b-2 border-white/20">
      {/* Marquee — lg and above only */}
      <div className="hidden lg:flex flex-1 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <MarqueeItem key={i} />
          ))}
        </div>
      </div>

      {/* Static text — md only (hidden on sm and below, hidden on lg+) */}
      <div className="hidden md:flex lg:hidden flex-1 items-center gap-3 text-brand-primary font-sans font-semibold">
        <span>{COPY.MARQUEE_ITEM_1}</span>
        <span className="text-gray-300"><FaGripLinesVertical /></span>
        <span>{COPY.MARQUEE_ITEM_2}</span>
      </div>

      {/* Static text — sm and below only */}
      <div className="flex md:hidden flex-1 text-brand-primary font-sans font-semibold text-sm">
        {COPY.MARQUEE_ITEM_1}
      </div>

      <Button
        onClick={handleOrder}
        disabled={isPending}
        className="shrink-0 rounded bg-brand-primary text-black font-heading font-semibold hover:bg-brand-primary/90 gap-1.5 disabled:opacity-80"
      >
        {isPending ? (
          <>
            <Spinner className="size-3.5 border-[1.5px] text-black" />
            Loading...
          </>
        ) : (
          COPY.SCROLL_CTA_BUTTON
        )}
      </Button>
    </section>
  );
}
