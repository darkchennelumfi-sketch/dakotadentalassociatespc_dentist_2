"use client";

import Image from "next/image";
import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter({
  before,
  after,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  className,
}: {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}) {
  const [position, setPosition] = useState(52);

  return (
    <div
      className={`group relative aspect-[277/145] w-full select-none overflow-hidden rounded-2xl border border-spruce/10 bg-spruce/5 ${className ?? ""}`}
    >
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes="(max-width: 768px) 100vw, 560px"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-spruce/75 px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-cream backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-cream/85 px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-spruce backdrop-blur-sm">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-cream/90 shadow-[0_0_0_1px_rgba(11,43,37,0.15)]"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-cream text-spruce shadow-lg">
          <MoveHorizontal className="size-4" aria-hidden />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Drag to compare before and after"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />

      <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-spruce/70 px-3 py-1 text-[0.58rem] text-cream/80 opacity-100 backdrop-blur-sm transition-opacity group-hover:opacity-0">
        Drag to compare
      </span>
    </div>
  );
}
