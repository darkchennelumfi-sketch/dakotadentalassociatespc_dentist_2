"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { glossary, glossaryLetters } from "@/content/glossary";
import { cn } from "@/lib/utils";

export function GlossarySearch() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return glossary.filter((item) => {
      const matchesLetter = !letter || item.term.charAt(0).toUpperCase() === letter;
      const matchesQuery =
        !needle ||
        item.term.toLowerCase().includes(needle) ||
        item.definition.toLowerCase().includes(needle);
      return matchesLetter && matchesQuery;
    });
  }, [query, letter]);

  return (
    <div>
      <div className="rounded-3xl border border-spruce/10 bg-white/55 p-4 backdrop-blur-sm sm:p-5">
        <label htmlFor="glossary-search" className="sr-only">
          Search dental terms
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-stone/60"
            aria-hidden
          />
          <input
            id="glossary-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a term or definition…"
            className="h-12 w-full rounded-xl border border-spruce/15 bg-white/70 pl-11 pr-11 text-sm text-ink shadow-sm outline-none transition-all placeholder:text-stone/60 focus:border-fern/60 focus:bg-white focus:ring-4 focus:ring-fern/10"
          />
          {query ? (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-stone transition-colors hover:bg-spruce/[0.06] hover:text-spruce"
            >
              <X className="size-3.5" aria-hidden />
            </button>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setLetter(null)}
            aria-pressed={letter === null}
            className={cn(
              "grid size-8 cursor-pointer place-items-center rounded-lg text-[0.7rem] font-medium transition-colors",
              letter === null
                ? "bg-spruce text-cream"
                : "bg-spruce/[0.05] text-stone hover:bg-spruce/10 hover:text-spruce",
            )}
          >
            All
          </button>
          {glossaryLetters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setLetter((current) => (current === item ? null : item))}
              aria-pressed={letter === item}
              className={cn(
                "grid size-8 cursor-pointer place-items-center rounded-lg text-[0.7rem] font-medium transition-colors",
                letter === item
                  ? "bg-spruce text-cream"
                  : "bg-spruce/[0.05] text-stone hover:bg-spruce/10 hover:text-spruce",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-[0.74rem] text-stone">
        {results.length} {results.length === 1 ? "term" : "terms"}
        {letter ? ` starting with ${letter}` : ""}
        {query.trim() ? ` matching “${query.trim()}”` : ""}
      </p>

      {results.length > 0 ? (
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {results.map((item) => (
            <div
              key={item.term}
              className="rounded-2xl border border-spruce/10 bg-cream/80 px-5 py-4 transition-colors hover:border-spruce/20"
            >
              <dt className="font-display text-lg text-spruce">{item.term}</dt>
              <dd className="mt-1 text-[0.84rem] leading-relaxed text-stone">
                {item.definition}
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-spruce/20 bg-white/40 px-6 py-12 text-center">
          <p className="font-display text-xl text-spruce">No terms found.</p>
          <p className="mt-1 text-sm text-stone">
            Try a different word or select another letter.
          </p>
        </div>
      )}
    </div>
  );
}
