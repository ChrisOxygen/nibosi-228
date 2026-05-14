import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="section-y-p bg-[#272724]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-12 max-w-3xl">
          <h3 className=" text-5xl font-semibold text-primary-gold">
            Happy customers!!
          </h3>
          <div className=" flex w-full gap-4 items-stretch">
            <Image
              alt="Testimonial from Chioma"
              src="/assets/testimonials/testimonial-chioma-whatsapp.jpeg"
              width={1000}
              height={1000}
              className="h-full max-w-[300px] object-cover"
            />

            <Image
              alt="Testimonial from Adesua"
              src="/assets/testimonials/testimonial-adesua-whatsapp.jpeg"
              width={1000}
              height={1000}
              className="h-full max-w-[300px] object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className=" font-semibold text-4xl text-[#808080] line-through">
              Total Value: ₦88,500
            </h3>
            <h2 className=" font-semibold text-5xl text-primary-gold">
              Order Today : ₦60,000
            </h2>
            <div className="relative">
              <Image
                alt="arrow"
                src="/assets/imgi_3_decorator-shape-01.webp"
                width={1000}
                height={1000}
                className="absolute -rotate-45  -top-30 -left-25 w-20 h-[120%]"
              />
              <Image
                alt="arrow"
                src="/assets/imgi_4_decorator-shape-02.webp"
                width={1000}
                height={1000}
                className="absolute -top-30 rotate-45  -right-25 w-20 h-[120%]"
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
          </div>
        </div>
      </div>
    </section>
  );
}
