import Image from "next/image";

export default function ProductPricing() {
  return (
    <section className="section-y-p bg-[#1B1C1D]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="p-1 flex w-full gap-1 items-stretch bg-primary-gold">
            <Image
              alt="nibosi-watch"
              src="/assets/nibosi-watch-diamond-display-case.jpeg"
              width={1000}
              height={1000}
              className="h-[350px] object-cover"
            />

            <Image
              alt="nibosi-watch"
              src="/assets/gold-chain-bracelet.jpeg"
              width={1000}
              height={1000}
              className=" h-[350px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 px-5 font-heading">
            <div className="flex gap-3 items-center">
              <span className=" text-2xl font-semibold shrink-0">
                Nibosi Ruby Prestige Day-Date watch
              </span>
              <span className="shrink-1 w-full border-dashed border-b-4 border-white"></span>
              <span className="text-2xl font-semibold shrink-0">₦63,000</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className=" text-2xl font-semibold shrink-0">
                Golden Dynasty Premium Bracelet
              </span>
              <span className="shrink-1 w-full border-dashed border-b-4 border-white"></span>
              <span className="text-2xl font-semibold shrink-0">₦15,500</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className=" text-2xl font-semibold shrink-0">
                Delivery in Lagos(FREE)
              </span>
              <span className="shrink-1 w-full border-dashed border-b-4 border-white"></span>
              <span className="text-2xl font-semibold shrink-0">₦5,000</span>
            </div>
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
