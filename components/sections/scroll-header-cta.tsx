import { Button } from "../ui/button";
import { FaGripLinesVertical } from "react-icons/fa6";

const MarqueeItem = () => (
  <div className="flex items-center">
    <span className="shrink-0 text-[#D4AF37] font-sans font-semibold">
      Pay ONLY When You Receive It
    </span>
    <span className="shrink-0 text-gray-300 mx-4">
      <FaGripLinesVertical />
    </span>
    <span className="shrink-0 text-[#D4AF37] font-sans font-semibold">
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
      <div className="flex-1 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <MarqueeItem key={i} />
          ))}
        </div>
      </div>
      <Button className="shrink-0 rounded bg-[#D4AF37] text-black font-heading font-semibold hover:bg-[#D4AF37]/90">
        ORDER NOW
      </Button>
    </section>
  );
}
