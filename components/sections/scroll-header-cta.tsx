import { Button } from "../ui/button";
import { FaGripLinesVertical } from "react-icons/fa6";

const MarqueeItem = () => (
  <div className="flex items-center">
    <span className="shrink-0 text-primary-gold font-sans font-semibold">
      Pay ONLY When You Receive It
    </span>
    <span className="shrink-0 text-gray-300 mx-4">
      <FaGripLinesVertical />
    </span>
    <span className="shrink-0 text-primary-gold font-sans font-semibold">
      FREE Delivery to Your Door
    </span>
    <span className="shrink-0 text-gray-300 mx-4">
      <FaGripLinesVertical />
    </span>
  </div>
);

export default function ScrollHeaderCTA() {
  return (
    <section className="flex items-center p-3 gap-4 overflow-hidden border-b-2 border-white/20">
      {/* Marquee — lg and above only */}
      <div className="hidden lg:flex flex-1 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <MarqueeItem key={i} />
          ))}
        </div>
      </div>

      {/* Static text — md only (hidden on sm and below, hidden on lg+) */}
      <div className="hidden md:flex lg:hidden flex-1 items-center gap-3 text-primary-gold font-sans font-semibold">
        <span>Pay ONLY When You Receive It</span>
        <span className="text-gray-300"><FaGripLinesVertical /></span>
        <span>FREE Delivery to Your Door</span>
      </div>

      {/* Static text — sm and below only */}
      <div className="flex md:hidden flex-1 text-primary-gold font-sans font-semibold text-sm">
        Pay ONLY When You Receive It
      </div>

      <Button className="shrink-0 rounded bg-primary-gold text-black font-heading font-semibold hover:bg-primary-gold/90">
        ORDER NOW
      </Button>
    </section>
  );
}
