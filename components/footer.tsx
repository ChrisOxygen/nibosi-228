import { COPY } from "@/constants/copy";

function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/black-gears-texture.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 section-y-p flex flex-col items-center gap-6 px-4 sm:px-6 md:px-10 lg:px-16">
        <p className="text-sm sm:text-base md:text-lg text-center">
          {COPY.FOOTER_COPYRIGHT}
        </p>
        <p className="text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md md:max-w-lg lg:max-w-175 text-center leading-relaxed text-white/70">
          {COPY.FOOTER_DISCLAIMER}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
