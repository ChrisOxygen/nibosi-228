"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CheckoutFormValues } from "@/validators/checkout";

type OrderState = {
  firstName: string;
  hasOrdered: boolean;
  orderData: CheckoutFormValues | null;
  setOrder: (data: CheckoutFormValues) => void;
};

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      firstName: "",
      hasOrdered: false,
      orderData: null,
      setOrder: (data) =>
        set({ firstName: data.firstName, hasOrdered: true, orderData: data }),
    }),
    { name: "nibosi-order" }
  )
);
