import Image from "next/image";

export default function PayOnDelivery() {
  return (
    <section className="section-y-p bg-[#272724]">
      <div className="max-w-6xl mx-auto flex flex-col gap-20 items-center">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-6xl text-primary-gold">
            Order Now, Pay On Delivery
          </h2>
          <span className="text-2xl text-center max-w-4xl font-semibold italic">
            Ready to make your statement with the Nibosi Ruby Prestige? We
            deliver right to your doorstep in Lagos State, and you only pay when
            your presidential timepiece arrives safely in your hands
          </span>
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
    </section>
  );
}
