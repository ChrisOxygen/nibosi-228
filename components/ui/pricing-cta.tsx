import Image from "next/image";
import { PRICING, formatNaira } from "@/constants/pricing";

type Props = {
  variant?: "hero" | "default";
};

export default function PricingCTA({ variant = "default" }: Props) {
  const isHero = variant === "hero";

  return (
    <div className="relative">
      <Image
        alt=""
        src="/assets/imgi_3_decorator-shape-01.webp"
        width={1000}
        height={1000}
        className={
          isHero
            ? "absolute top-5 -left-25 w-20 h-[120%]"
            : "absolute -rotate-45 -top-30 -left-25 w-20 h-[120%]"
        }
      />
      <Image
        alt=""
        src="/assets/imgi_4_decorator-shape-02.webp"
        width={1000}
        height={1000}
        className={
          isHero
            ? "absolute top-5 -right-25 w-20 h-[120%]"
            : "absolute -top-30 rotate-45 -right-25 w-20 h-[120%]"
        }
      />
      <a
        href="/checkout"
        className="gold-cta flex flex-col items-center gap-2 text-black font-heading px-14 py-4"
      >
        <span className="text-base font-medium">
          Original price {formatNaira(PRICING.ORIGINAL)}
        </span>
        <span className="text-4xl font-semibold">
          Get This Watch for {formatNaira(PRICING.OFFER)}
        </span>
        <span className="text-base font-medium">
          Save {formatNaira(PRICING.SAVINGS)} | Free Delivery | Pay on delivery
        </span>
      </a>
    </div>
  );
}
