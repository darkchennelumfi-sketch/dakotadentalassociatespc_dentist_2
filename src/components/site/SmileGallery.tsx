"use client";

import { useState } from "react";
import { BeforeAfter } from "./BeforeAfter";
import { smileCategories } from "@/content/gallery";
import { cn } from "@/lib/utils";

export function SmileGallery() {
  const [active, setActive] = useState("all");
  const categories =
    active === "all"
      ? smileCategories
      : smileCategories.filter((category) => category.id === active);

  return (
    <div>
      <div
        className="hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1"
        role="tablist"
        aria-label="Filter before and after photos"
      >
        <FilterButton active={active === "all"} onClick={() => setActive("all")}>
          All cases
        </FilterButton>
        {smileCategories.map((category) => (
          <FilterButton
            key={category.id}
            active={active === category.id}
            onClick={() => setActive(category.id)}
          >
            {category.label}
          </FilterButton>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) =>
          category.cases.map((item) => (
            <figure
              key={item.id}
              className="overflow-hidden rounded-2xl border border-spruce/10 bg-white/55 p-2 shadow-soft"
            >
              <BeforeAfter
                before={item.before}
                after={item.after}
                beforeAlt={`${category.label} before treatment`}
                afterAlt={`${category.label} after treatment`}
              />
              <figcaption className="px-2 pb-1 pt-3">
                <p className="font-display text-lg leading-tight text-spruce">
                  {category.label}
                </p>
                <p className="mt-1 text-[0.72rem] leading-snug text-stone">
                  {category.description}
                </p>
              </figcaption>
            </figure>
          )),
        )}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "shrink-0 cursor-pointer rounded-full border px-4 py-2 text-[0.78rem] font-medium transition-colors",
        active
          ? "border-spruce bg-spruce text-cream"
          : "border-spruce/15 bg-white/50 text-stone hover:border-spruce/30 hover:text-spruce",
      )}
    >
      {children}
    </button>
  );
}
