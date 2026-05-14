import Image from "next/image";
import { FaRegCheckSquare } from "react-icons/fa";
import { WATCH_FEATURES } from "@/constants/product-details";

export default function ProductDetails() {
  return (
    <section className="section-y-p bg-[#1B1C1D]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2">
          <h2 className=" font-semibold text-6xl text-primary-gold">
            NIBOSI RUBY PRESTIGE
          </h2>
          <span className=" text-lg font-semibold">
            The Perfect Combination for the Modern Professional
          </span>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 w-full border-3 border-primary-gold p-4">
            <div className="flex w-full">
              <Image
                alt="nibosi-watch"
                src="/assets/nibosi-watch-gold-red-display-cushion.jpeg"
                width={1000}
                height={1000}
                className="basis-1/3 w-[200px] object-cover"
              />
              <Image
                alt="nibosi-watch"
                src="/assets/nibosi-watch-gold-red-display-cushion.jpeg"
                width={1000}
                height={1000}
                className="basis-1/3 w-[200px] object-cover"
              />
              <Image
                alt="nibosi-watch"
                src="/assets/nibosi-watch-gold-red-display-cushion.jpeg"
                width={1000}
                height={1000}
                className="basis-1/3 w-[200px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className=" mont-semibold text-4xl text-primary-gold">
                Nibosi Ruby Prestige Day-Date Watch
              </h2>
              <span className=" font-semibold">
                Precision timekeeping with sophisticated design
              </span>
            </div>
            <div className="flex p-2 w-full bg-[#272724] ">
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
          <div className="flex gap-4 w-full border-3 bg-[#272724]  border-primary-gold p-4">
            <Image
              alt="nibosi-watch"
              src="/assets/gold-chain-bracelet.jpeg"
              width={1000}
              height={1000}
              className="basis-1/4 h-[210px] object-cover"
            />
            <div className=" flex basis-3/4 flex-col  gap-2 justify-center">
              <span className=" text-primary-gold text-3xl italic">
                (FREE GIFT)
              </span>
              <h3 className=" text-primary-gold text-4xl font-semibold">
                Golden Dynasty Premium Bracelet
              </h3>
              <span className=" text-lg font-semibold">
                Golden Dynasty, a bold multi-link bracelet that embodies wealth,
                power, and timeless sophistication
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
