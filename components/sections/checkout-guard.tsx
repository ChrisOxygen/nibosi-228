"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOrderStore } from "@/store/order";

export default function CheckoutGuard() {
  const hasOrdered = useOrderStore((s) => s.hasOrdered);
  const router = useRouter();

  useEffect(() => {
    if (hasOrdered) {
      router.replace("/thank-you");
    }
  }, [hasOrdered, router]);

  return null;
}
