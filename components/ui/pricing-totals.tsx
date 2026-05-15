import { PRICING, formatNaira } from "@/constants/pricing";
import PricingCTA from "./pricing-cta";

export default function PricingTotals() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="font-semibold text-4xl text-[#808080] line-through">
        Total Value: {formatNaira(PRICING.ORIGINAL)}
      </h3>
      <h2 className="font-semibold text-5xl text-primary-gold">
        Order Today : {formatNaira(PRICING.OFFER)}
      </h2>
      <PricingCTA />
    </div>
  );
}
