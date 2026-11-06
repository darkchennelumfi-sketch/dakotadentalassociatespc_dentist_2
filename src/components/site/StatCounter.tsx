"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  suffix = "",
  label,
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value, duration]);

  const shown = reduce ? value : display;

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-display text-4xl leading-none text-spruce sm:text-5xl">
        {shown}
        <span className="text-copper">{suffix}</span>
      </p>
      <p className="mt-2 text-[0.76rem] leading-snug text-stone">{label}</p>
    </div>
  );
}
