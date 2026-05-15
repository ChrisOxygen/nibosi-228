"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type OrderState = {
  firstName: string;
  hasOrdered: boolean;
  setOrder: (firstName: string) => void;
};

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      firstName: "",
      hasOrdered: false,
      setOrder: (firstName) => set({ firstName, hasOrdered: true }),
    }),
    { name: "nibosi-order" }
  )
);
