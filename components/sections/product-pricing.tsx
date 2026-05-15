import Image from "next/image";
import PricingTotals from "@/components/ui/pricing-totals";
import { PRICING, formatNaira } from "@/constants/pricing";
import { PRODUCT, PRODUCT_IMAGES } from "@/constants/product";

const LINE_ITEMS = [
  { label: PRODUCT.WATCH_NAME, price: PRICING.WATCH },
  { label: PRODUCT.BRACELET_NAME, price: PRICING.BRACELET },
  { label: "Delivery in Lagos (FREE)", price: PRICING.DELIVERY },
] as const;

export default function ProductPricing() {
  return (
    <section className="section-y-p bg-[#1B1C1D]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-8 max-w-3xl">
          <div className="p-1 flex w-full gap-1 items-stretch bg-primary-gold">
            <Image
              alt={PRODUCT.WATCH_NAME}
              src={PRODUCT_IMAGES.WATCH_PRICING}
              width={1000}
              height={1000}
              className="h-[350px] object-cover"
            />
            <Image
              alt={PRODUCT.BRACELET_NAME}
              src={PRODUCT_IMAGES.BRACELET}
              width={1000}
              height={1000}
              className="h-[350px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 px-5 font-heading">
            {LINE_ITEMS.map(({ label, price }) => (
              <div key={label} className="flex gap-3 items-center">
                <span className="text-2xl font-semibold shrink-0">{label}</span>
                <span className="shrink-1 w-full border-dashed border-b-4 border-white" />
                <span className="text-2xl font-semibold shrink-0">
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
