import PricingTotals from "@/components/ui/pricing-totals";
import { PRODUCT } from "@/constants/product";

export default function PayOnDelivery() {
  return (
    <section className="section-y-p bg-brand-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-20 items-center">
        <div className="flex flex-col sm:items-center gap-2">
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-primary sm:text-center">
            Order Now, Pay On Delivery
          </h2>
          <span className="text-lg sm:text-xl md:text-2xl sm:text-center max-w-4xl font-semibold italic">
            {PRODUCT.PAY_ON_DELIVERY_SUBTITLE}
          </span>
        </div>
        <PricingTotals location="pay_on_delivery" />
      </div>
    </section>
  );
}
