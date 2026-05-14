import CountdownTimer from "@/components/countdown-timer";

export default function Hero() {
  return (
    <section className="section-y-p">
      <div className="max-w-6xl mx-auto flex items-center flex-col gap-8">
        <h1 className="max-w-4xl text-6xl underline font-semibold text-center text-[#D4AF37]">
          Command Every Moment with Nibosi Ruby Prestige
        </h1>
        <p className="max-w-3xl text-2xl font-semibold italic text-center">
          (The Premium Watch & Bracelet Set That Defines Your Style)
        </p>
        <CountdownTimer />
      </div>
    </section>
  );
}
