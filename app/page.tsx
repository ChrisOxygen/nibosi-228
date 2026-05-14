import ScrollHeaderCTA from "@/components/sections/scroll-header-cta";
import Hero from "@/components/sections/hero";
import ProductDetails from "@/components/sections/product-details";
import ProductBenefits from "@/components/sections/product-benefits";
import ProductPricing from "@/components/sections/product-pricing";
import Testimonials from "@/components/sections/testimonials";
import Guarantee from "@/components/sections/guarantee";
import FAQ from "@/components/sections/faq";
import PayOnDelivery from "@/components/sections/pay-on-delivery";

export default function LandingPage() {
  return (
    <main>
      <ScrollHeaderCTA />
      <Hero />
      <ProductDetails />
      <ProductBenefits />
      <ProductPricing />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <PayOnDelivery />
    </main>
  );
}
