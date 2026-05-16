import { COPY } from "@/constants/copy";

export default function CheckoutHeader() {
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
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-6xl text-brand-primary text-center">
              {COPY.CHECKOUT_HEADING}
            </h2>
            <span className="text-base sm:text-lg lg:text-2xl text-center max-w-4xl font-semibold italic px-4">
              {COPY.CHECKOUT_WARNING}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
