"use client";

import { useEffect, useState } from "react";
import { useCountdownStore } from "@/stores/countdown-store";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft(endTime: number): TimeLeft {
  const remaining = Math.max(0, endTime - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
}

export default function CountdownTimer() {
  const { endTime, init, reset } = useCountdownStore();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (!endTime) return;

    const tick = () => {
      if (Date.now() >= endTime) {
        reset();
        return;
      }
      setTimeLeft(getTimeLeft(endTime));
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endTime, reset]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col gap-1 w-full max-w-lg border-dashed border-4 border-primary-gold">
      <span className="w-full bg-primary-gold text-2xl text-center text-black font-semibold">
        Free shipping ends in
      </span>
      <div className="flex py-2 items-center justify-around">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <span className="font-semibold text-4xl text-white tabular-nums">
              {value}
            </span>
            <span className="text-primary-gold text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
