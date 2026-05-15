import { FaCheck } from "react-icons/fa";
import { GUARANTEE_ITEMS } from "@/constants/guarantee";

export default function Guarantee() {
  return (
    <section className="relative overflow-hidden section-y-p">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/black-gears-texture.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/90" />
      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-center">
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-semibold text-6xl text-primary-gold">
              OUR GUARANTEE
            </h2>
            <span className="text-lg text-center font-semibold">
              We&apos;re so confident in Nibosi Ruby Prestige that we offer a
              full satisfaction guarantee, because we&apos;ve tested it
              thoroughly and it exceeds industry standards for this price point
            </span>
          </div>
          <div className="flex items-center flex-col gap-6 p-4">
            <span className="text-primary-gold text-2xl font-semibold">
              We&apos;re offering:
            </span>
            <ul className="flex gap-2 flex-col">
              {GUARANTEE_ITEMS.map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="text-primary-gold mt-1 shrink-0">
                    <FaCheck />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <h3 className="max-w-4xl text-primary-gold font-semibold text-center border-2 border-primary-gold p-6 text-4xl">
            If Nibosi Ruby Prestige doesn&apos;t exceed your expectations for
            luxury and presence, return it for a full refund - no questions
            asked.
          </h3>
        </div>
      </div>
    </section>
  );
}
