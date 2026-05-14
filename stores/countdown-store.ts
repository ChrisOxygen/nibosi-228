import { create } from "zustand";
import { persist } from "zustand/middleware";

const FORTY_EIGHT_HOURS = 48 * 60 * 60 * 1000;

interface CountdownStore {
  endTime: number | null;
  init: () => void;
  reset: () => void;
}

export const useCountdownStore = create<CountdownStore>()(
  persist(
    (set, get) => ({
      endTime: null,
      init: () => {
        if (!get().endTime) {
          set({ endTime: Date.now() + FORTY_EIGHT_HOURS });
        }
      },
      reset: () => {
        set({ endTime: Date.now() + FORTY_EIGHT_HOURS });
      },
    }),
    { name: "nibosi-countdown" }
  )
);
