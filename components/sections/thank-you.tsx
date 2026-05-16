"use client";

import Link from "next/link";
import { useOrderStore } from "@/store/order";
import { PRODUCT, WHATSAPP_LINK } from "@/constants/product";
import { COPY } from "@/constants/copy";
import { FaWhatsapp } from "react-icons/fa";

function GoldRule() {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-brand-primary to-brand-primary" />
      <div className="size-2 rotate-45 bg-brand-primary shrink-0" />
      <div className="size-2 rotate-45 border border-brand-primary shrink-0" />
      <div className="size-2 rotate-45 bg-brand-primary shrink-0" />
      <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-brand-primary to-brand-primary" />
    </div>
  );
}

export default function ThankYou() {
  const firstName = useOrderStore((s) => s.firstName);
  const displayName = firstName || "Friend";

  return (
    <div
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/nibosi-watch-gold-red-leather-wood.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/95" />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-5 sm:px-8 py-10 flex flex-col gap-6">
        <GoldRule />

        {/* Heading */}
        <div className="flex flex-col gap-1">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-brand-primary leading-tight">
            Order Confirmed —<br />
            You&apos;re Our Lucky #{PRODUCT.LUCKY_NUMBER}!
          </h1>
          <p className="font-semibold text-lg sm:text-xl text-white/90">
            Congratulations,{" "}
            <span className="text-brand-primary">{displayName}</span>!
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 text-white/80 text-base sm:text-lg leading-relaxed">
          <p>
            You&apos;re officially our{" "}
            <span className="text-brand-primary font-semibold">
              {PRODUCT.LUCKY_NUMBER}th customer today
            </span>{" "}
            — and {PRODUCT.LUCKY_NUMBER} has always been our lucky number. Since you hit
            that magic spot, we&apos;re throwing in an{" "}
            <strong className="text-white">extra free gift</strong> with your{" "}
            {PRODUCT.NAME} order.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <p className="text-white/80 text-base sm:text-lg ">
          Your package is ready — want it at your doorstep{" "}
          <span className="text-brand-primary font-semibold">
            before the day is over?
          </span>{" "}
          Tap below and we&apos;ll make it happen,{" "}
          <span className="text-brand-primary font-semibold">
            at no extra cost.
          </span>
        </p>
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-pulse group relative overflow-hidden rounded flex items-center justify-center gap-4 bg-whatsapp px-6 py-6 text-white"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none" />
          <FaWhatsapp className="text-4xl sm:text-6xl shrink-0" />
          <span className="font-heading capitalize font-bold text-xl sm:text-3xl leading-tight">
            {COPY.WHATSAPP_CTA_BUTTON}
          </span>
        </Link>

        <GoldRule />
      </div>
    </div>
  );
}
