"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/content/site";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const reduce = useReducedMotion();

  const go = useCallback(
    (next: number, nextDirection: number) => {
      setDirection(nextDirection);
      setIndex((next + testimonials.length) % testimonials.length);
    },
    [],
  );

  useEffect(() => {
    if (paused || reduce) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, reduce]);

  const active = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-copper">
          Patient stories
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(index - 1, -1)}
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-spruce/15 text-spruce transition-colors hover:border-spruce/30 hover:bg-spruce/[0.05]"
          >
            <ArrowLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(index + 1, 1)}
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-spruce/15 text-spruce transition-colors hover:border-spruce/30 hover:bg-spruce/[0.05]"
          >
            <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="relative mt-6 min-h-[260px] overflow-hidden rounded-3xl border border-spruce/10 bg-cream/70 p-7 backdrop-blur-sm sm:min-h-[240px] sm:p-10">
        <Quote className="size-8 text-brass/60" aria-hidden />
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={active.name}
            initial={reduce ? false : { opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: direction * -24 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3"
          >
            <blockquote className="text-pretty font-display text-[clamp(1.25rem,2.3vw,1.75rem)] leading-[1.35] text-spruce">
              “{active.quote}”
            </blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center gap-2 text-[0.78rem]">
              <span className="font-semibold text-spruce">{active.name}</span>
              <span className="text-stone/50">·</span>
              <span className="text-stone">{active.topic}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center gap-2">
        {testimonials.map((item, itemIndex) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show testimonial from ${item.name}`}
            aria-current={itemIndex === index}
            onClick={() => go(itemIndex, itemIndex > index ? 1 : -1)}
            className={cn(
              "h-1.5 cursor-pointer rounded-full transition-all duration-300",
              itemIndex === index
                ? "w-7 bg-copper"
                : "w-1.5 bg-spruce/20 hover:bg-spruce/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
