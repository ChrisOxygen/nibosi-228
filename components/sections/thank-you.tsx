"use client";

import { useOrderStore } from "@/store/order";
import { PRODUCT } from "@/constants/product";
import { FaWhatsapp } from "react-icons/fa";

const LUCKY_NUMBER = 7;
const WHATSAPP_NUMBER = "2348000000000"; // replace with real number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I just placed an order for the Nibosi Ruby Prestige watch set and I'm ready for delivery today!"
)}`;

function GoldRule() {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-primary-gold to-primary-gold" />
      <div className="size-2 rotate-45 bg-primary-gold shrink-0" />
      <div className="size-2 rotate-45 border border-primary-gold shrink-0" />
      <div className="size-2 rotate-45 bg-primary-gold shrink-0" />
      <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-primary-gold to-primary-gold" />
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
        backgroundImage: "url('/assets/black-gears-texture.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/88" />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-5 sm:px-8 py-10 flex flex-col gap-6">
        <GoldRule />

        {/* Heading */}
        <div className="flex flex-col gap-1">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary-gold leading-tight">
            Order Confirmed —<br />You&apos;re Our Lucky #{LUCKY_NUMBER}!
          </h1>
          <p className="font-semibold text-lg sm:text-xl text-white/90">
            Congratulations,{" "}
            <span className="text-primary-gold">{displayName}</span>!
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 text-white/80 text-base sm:text-lg leading-relaxed">
          <p>
            You&apos;re officially our{" "}
            <span className="text-primary-gold font-semibold">{LUCKY_NUMBER}th customer today</span>{" "}
            — and {LUCKY_NUMBER}{" "}has always been our lucky number. Since you hit that magic spot,
            we&apos;re throwing in an{" "}
            <strong className="text-white">extra free gift</strong>{" "}
            with your {PRODUCT.NAME}{" "}order.
          </p>
          <p className="text-primary-gold font-semibold">
            Your package is ready — message us now for same-day delivery in Lagos State!
          </p>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded flex items-center justify-center gap-4 bg-[#25D366] px-6 py-5 text-white transition-transform hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,211,102,0.45)]"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none" />
          <FaWhatsapp className="text-4xl sm:text-5xl shrink-0" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg sm:text-2xl leading-tight">
              Contact Us on WhatsApp — Get Delivery Today!
            </span>
            <span className="text-sm font-medium opacity-90">
              At no extra cost | Just for you!
            </span>
          </div>
        </a>

        <GoldRule />
      </div>
    </div>
  );
}
