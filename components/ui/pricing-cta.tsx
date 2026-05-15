"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PRICING, formatNaira } from "@/constants/pricing";
import { useOrderStore } from "@/store/order";

type Props = {
  variant?: "hero" | "default";
};

export default function PricingCTA({ variant = "default" }: Props) {
  const isHero = variant === "hero";
  const router = useRouter();
  const hasOrdered = useOrderStore((s) => s.hasOrdered);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    router.push(hasOrdered ? "/thank-you" : "/checkout");
  }

  return (
    <div className="relative">
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
      <a
        href={hasOrdered ? "/thank-you" : "/checkout"}
        onClick={handleClick}
        className="gold-cta flex flex-col items-center gap-2 text-black font-heading px-6 sm:px-10 md:px-14 py-4"
      >
        <span className="text-xs sm:text-sm md:text-base font-medium text-center">
          Original price {formatNaira(PRICING.ORIGINAL)}
        </span>
        <span className="text-xl sm:text-2xl md:text-4xl font-semibold text-center">
          Get This Watch for {formatNaira(PRICING.OFFER)}
        </span>
        <span className="text-xs sm:text-sm md:text-base font-medium text-center">
          Save {formatNaira(PRICING.SAVINGS)} | Free Delivery | Pay on delivery
        </span>
      </a>
    </div>
  );
}
