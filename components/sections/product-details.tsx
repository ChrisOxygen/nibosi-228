import Image from "next/image";
import { FaRegCheckSquare } from "react-icons/fa";
import { WATCH_FEATURES } from "@/constants/product-details";
import { PRODUCT, PRODUCT_IMAGES } from "@/constants/product";

function WatchDetails() {
  return (
    <div className="flex flex-col gap-4 w-full border-3 border-primary-gold p-4">
      <div className="flex w-full">
        {PRODUCT_IMAGES.WATCH_GALLERY.map((src, i) => (
          <Image
            key={i}
            alt={PRODUCT.WATCH_NAME}
            src={src}
            width={1000}
            height={1000}
            className="basis-1/3 w-[200px] object-cover"
          />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="mont-semibold text-4xl text-primary-gold">
          {PRODUCT.WATCH_NAME}
        </h2>
        <span className="font-semibold">{PRODUCT.WATCH_TAGLINE}</span>
      </div>
      <div className="flex p-2 w-full bg-[#272724]">
        <ul className="flex gap-3 flex-col">
          {WATCH_FEATURES.map((feature) => (
            <li key={feature} className="flex gap-4 items-center">
              <span className="text-primary-gold">
                <FaRegCheckSquare />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BraceletDetails() {
  return (
    <div className="flex gap-4 w-full border-3 bg-[#272724] border-primary-gold p-4">
      <Image
        alt={PRODUCT.BRACELET_NAME}
        src={PRODUCT_IMAGES.BRACELET}
        width={1000}
        height={1000}
        className="basis-1/4 h-[210px] object-cover"
      />
      <div className="flex basis-3/4 flex-col gap-2 justify-center">
        <span className="text-primary-gold text-3xl italic">(FREE GIFT)</span>
        <h3 className="text-primary-gold text-4xl font-semibold">
          {PRODUCT.BRACELET_NAME}
        </h3>
        <span className="text-lg font-semibold">
          {PRODUCT.BRACELET_DESCRIPTION}
        </span>
      </div>
    </div>
  );
}

export default function ProductDetails() {
  return (
    <section className="section-y-p bg-[#1B1C1D]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-6xl text-primary-gold">
            {PRODUCT.NAME.toUpperCase()}
          </h2>
          <span className="text-lg font-semibold">{PRODUCT.TAGLINE}</span>
        </div>
        <div className="flex flex-col gap-8">
          <WatchDetails />
          <BraceletDetails />
        </div>
      </div>
    </section>
  );
}
