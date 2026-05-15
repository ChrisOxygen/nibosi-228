import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import {
  OTHER_WATCHES,
  OUR_WATCH_BENEFITS,
} from "@/constants/product-benefits";

export default function ProductBenefits() {
  return (
    <section
      className="section-y-p relative"
      style={{
        backgroundImage: "url('/assets/nibosi-watch-wrist-suit-01.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/90 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:items-center gap-10">
        <h2 className="text-primary-gold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-4xl sm:text-center">
          Why Ruby Prestige is Different from Everything Else...
        </h2>
        <div className="border-2 border-white p-2 flex flex-col sm:flex-row gap-1 items-stretch w-full">
          <div className="flex flex-1 flex-col gap-6 p-4">
            <span className="text-red-500 text-lg sm:text-2xl font-semibold">
              Other Watches
            </span>
            <ul className="flex gap-2 flex-col">
              {OTHER_WATCHES.map((item) => (
                <li key={item} className="flex  gap-2 items-start">
                  <span className="text-red-500 mt-1 shrink-0">
                    <FaTimesCircle />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block w-[2px] bg-white self-stretch" />
          <div className="block md:hidden h-[2px] bg-white w-full" />

          <div className="flex flex-1 flex-col gap-6 p-4">
            <span className="text-green-500 text-lg sm:text-2xl font-semibold">
              Nibosi Ruby Prestige
            </span>
            <ul className="flex gap-2 flex-col">
              {OUR_WATCH_BENEFITS.map((item) => (
                <li key={item} className="flex  gap-2 items-start">
                  <span className="text-green-500 mt-1 shrink-0">
                    <FaCheckCircle />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
