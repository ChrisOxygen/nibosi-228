import Image from "next/image";
import PricingTotals from "@/components/ui/pricing-totals";

const TESTIMONIAL_IMAGES = [
  {
    src: "/assets/testimonials/testimonial-chioma-whatsapp.jpeg",
    alt: "Testimonial from Chioma",
  },
  {
    src: "/assets/testimonials/testimonial-adesua-whatsapp.jpeg",
    alt: "Testimonial from Adesua",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="section-y-p bg-[#272724]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-12 max-w-3xl">
          <h3 className="text-5xl font-semibold text-primary-gold">
            Happy customers!!
          </h3>
          <div className="flex w-full gap-4 items-stretch">
            {TESTIMONIAL_IMAGES.map(({ src, alt }) => (
              <Image
                key={src}
                alt={alt}
                src={src}
                width={1000}
                height={1000}
                className="h-full max-w-[300px] object-cover"
              />
            ))}
          </div>
          <PricingTotals />
        </div>
      </div>
    </section>
  );
}
