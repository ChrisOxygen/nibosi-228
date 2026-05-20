import CountdownTimer from "@/components/countdown-timer";
import PricingCTA from "@/components/ui/pricing-cta";
import { PRODUCT, PRODUCT_IMAGES } from "@/constants/product";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="section-y-p relative overflow-hidden bg-cover sm:bg-contain bg-top"
      style={{ backgroundImage: "url('/assets/black-silk-texture.jpeg')" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--color-brand-dark) 0%, var(--color-brand-dark) 50%, transparent 51%)",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex items-center flex-col gap-8">
        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline font-semibold text-center text-brand-primary">
          {PRODUCT.HEADLINE}
        </h1>
        <p className="max-w-3xl text-base sm:text-xl md:text-2xl font-semibold italic text-center">
          {PRODUCT.SUBTITLE}
        </p>
        <CountdownTimer />
        <PricingCTA variant="hero" location="hero" />
        <Image
          alt={PRODUCT.NAME}
          src={PRODUCT_IMAGES.HERO}
          width={2000}
          height={2000}
          className="rounded aspect-square sm:aspect-video object-cover"
        />
      </div>
    </section>
  );
}
