"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Spinner } from "@/components/ui/spinner";
import { PRICING, formatNaira } from "@/constants/pricing";

type Props = {
  variant?: "hero" | "default";
};

export default function PricingCTA({ variant = "default" }: Props) {
  const isHero = variant === "hero";
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(() => {
      router.push("/checkout");
    });
  }

  return (
    <div className="relative w-full sm:max-w-2xl">
      <Image
        alt=""
        src="/assets/imgi_3_decorator-shape-01.webp"
        width={1000}
        height={1000}
        className={
          isHero
            ? "hidden md:block absolute top-5 -left-25 w-20 h-[120%]"
            : "hidden md:block absolute -rotate-45 -top-20 md:-top-30 -left-25 w-20 h-[120%]"
        }
      />
      <Image
        alt=""
        src="/assets/imgi_4_decorator-shape-02.webp"
        width={1000}
        height={1000}
        className={
          isHero
            ? "hidden md:block absolute top-5 -right-25 w-20 h-[120%]"
            : "hidden md:block absolute -top-20 md:-top-30  rotate-45 -right-25 w-20 h-[120%]"
        }
      />
      <button
        onClick={handleClick}
        disabled={isPending}
        className="gold-cta flex flex-col items-center gap-2 text-black font-heading px-6 sm:px-10 md:px-14 py-4 w-full disabled:opacity-80 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <span className="flex items-center gap-2.5 py-2">
            <Spinner className="size-5 border-[2.5px] text-black" />
            <span className="text-lg sm:text-2xl font-semibold">Loading...</span>
          </span>
        ) : (
          <>
            <span className="text-xs sm:text-sm md:text-base font-medium text-center">
              Original price {formatNaira(PRICING.ORIGINAL)}
            </span>
            <span className="text-xl sm:text-2xl md:text-4xl font-semibold text-center">
              Get This Watch for {formatNaira(PRICING.OFFER)}
            </span>
            <span className="text-xs sm:text-sm md:text-base font-medium text-center">
              Save {formatNaira(PRICING.SAVINGS)} | Free Delivery | Pay on delivery
            </span>
          </>
        )}
      </button>
    </div>
  );
}
