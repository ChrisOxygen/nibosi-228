import { PRICING, formatNaira } from "@/constants/pricing";
import PricingCTA from "./pricing-cta";

export default function PricingTotals() {
  return (
    <div className="flex flex-col w-full items-center gap-4">
      <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-brand-muted line-through text-center">
        Total Value: {formatNaira(PRICING.ORIGINAL)}
      </h3>
      <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-primary text-center">
        Order Today : {formatNaira(PRICING.OFFER)}
      </h2>
      <PricingCTA />
    </div>
  );
}
