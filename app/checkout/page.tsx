import CheckoutHeader from "@/components/sections/checkout-header";
import CheckoutForm from "@/components/sections/checkout-form";
import CheckoutGuard from "@/components/sections/checkout-guard";

export default function CheckoutPage() {
  return (
    <main>
      <CheckoutGuard />
      <CheckoutHeader />
      <CheckoutForm />
    </main>
  );
}
