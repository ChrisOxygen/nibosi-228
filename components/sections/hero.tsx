import CountdownTimer from "@/components/countdown-timer";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="section-y-p relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/black-silk-texture.jpeg')",
        backgroundSize: "contain",
        backgroundPosition: "top",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #1B1C1D 0%, #1B1C1D 50%, transparent 51%)",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto flex items-center flex-col gap-8">
        <h1 className="max-w-4xl text-6xl underline font-semibold text-center text-[#D4AF37]">
          Command Every Moment with Nibosi Ruby Prestige
        </h1>
        <p className="max-w-3xl text-2xl font-semibold italic text-center">
          (The Premium Watch & Bracelet Set That Defines Your Style)
        </p>
        <CountdownTimer />
        <div className="relative">
          <Image
            alt="arrow"
            src="/assets/imgi_3_decorator-shape-01.webp"
            width={1000}
            height={1000}
            className="absolute top-5 -left-25 w-20 h-[120%]"
          />
          <Image
            alt="arrow"
            src="/assets/imgi_4_decorator-shape-02.webp"
            width={1000}
            height={1000}
            className="absolute top-5 -right-25 w-20 h-[120%]"
          />

          <a
            href="/checkout"
            className="gold-cta flex flex-col items-center gap-2 text-black font-heading px-14 py-4"
          >
            <span className="text-base font-medium">
              Original price ₦88,500
            </span>
            <span className="text-4xl font-semibold">
              Get This Watch for ₦60,000
            </span>
            <span className="text-base font-medium">
              Save ₦28,500 | Free Delivery | Pay on delivery
            </span>
          </a>
        </div>
        <Image
          alt="arrow"
          src="/assets/nibosi-watch-gold-red-leather-wood.jpeg"
          width={2000}
          height={2000}
          className=" rounded-2xl aspect-video object-cover"
        />
      </div>
    </section>
  );
}
