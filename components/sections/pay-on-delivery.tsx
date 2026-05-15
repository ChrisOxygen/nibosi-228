import PricingTotals from "@/components/ui/pricing-totals";
import { PRODUCT } from "@/constants/product";

export default function PayOnDelivery() {
  return (
    <section className="section-y-p bg-[#272724]">
      <div className="max-w-6xl mx-auto flex flex-col gap-20 items-center">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-6xl text-primary-gold">
            Order Now, Pay On Delivery
          </h2>
          <span className="text-2xl text-center max-w-4xl font-semibold italic">
            {PRODUCT.PAY_ON_DELIVERY_SUBTITLE}
          </span>
        </div>
        <PricingTotals />
      </div>
    </section>
  );
}
