import Image from "next/image";
import PricingTotals from "@/components/ui/pricing-totals";
import { formatNaira, LINE_ITEMS } from "@/constants/pricing";
import { PRODUCT, PRODUCT_IMAGES } from "@/constants/product";

export default function ProductPricing() {
  return (
    <section className="section-y-p bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-8 w-full max-w-3xl">
          <div className="p-1 flex w-full gap-1 items-stretch bg-primary-gold">
            <Image
              alt={PRODUCT.WATCH_NAME}
              src={PRODUCT_IMAGES.WATCH_PRICING}
              width={1000}
              height={1000}
              className="h-[180px] sm:h-[260px] md:h-[350px] w-1/2 object-cover"
            />
            <Image
              alt={PRODUCT.BRACELET_NAME}
              src={PRODUCT_IMAGES.BRACELET}
              width={1000}
              height={1000}
              className="h-[180px] sm:h-[260px] md:h-[350px] w-1/2 object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 px-2 sm:px-5 font-heading">
            {LINE_ITEMS.map(({ label, price }) => (
              <div key={label} className="flex gap-2 items-center min-w-0">
                <span className="text-sm sm:text-lg md:text-2xl font-semibold shrink-0">{label}</span>
                <span className="shrink w-full border-dashed border-b-4 border-white" />
                <span className="text-sm sm:text-lg md:text-2xl font-semibold shrink-0">
                  {formatNaira(price)}
                </span>
              </div>
            ))}
          </div>
          <PricingTotals />
        </div>
      </div>
    </section>
  );
}
