import Image from "next/image";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "./Breadcrumbs";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageFit = "cover",
  breadcrumbs,
  variant = "light",
  badge,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  breadcrumbs: { label: string; href?: string }[];
  variant?: "light" | "dark";
  badge?: string;
  children?: React.ReactNode;
}) {
  const dark = variant === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        dark ? "border-white/10 bg-spruce text-cream" : "border-spruce/10 bg-cream",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          dark ? "radial-glow-dark" : "radial-glow",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          dark ? "hero-grid-dark" : "hero-grid",
        )}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10 lg:pb-24">
        <Breadcrumbs items={breadcrumbs} tone={dark ? "dark" : "light"} />

        <div
          className={cn(
            "mt-10 grid items-center gap-12",
            image ? "lg:grid-cols-[1.05fr_0.95fr]" : "max-w-4xl",
          )}
        >
          <div>
            <Reveal>
              <Eyebrow tone={dark ? "dark" : "light"}>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                className={cn(
                  "mt-5 text-balance text-[clamp(2.5rem,5.4vw,4.5rem)] leading-[1.02]",
                  dark ? "text-cream" : "text-spruce",
                )}
              >
                {title}
              </h1>
            </Reveal>
            {description ? (
              <Reveal delay={0.16}>
                <p
                  className={cn(
                    "mt-6 max-w-xl text-pretty text-[1.02rem] leading-relaxed",
                    dark ? "text-cream/65" : "text-stone",
                  )}
                >
                  {description}
                </p>
              </Reveal>
            ) : null}
            {children ? <Reveal delay={0.22}>{children}</Reveal> : null}
          </div>

          {image ? (
            <Reveal delay={0.14} className="relative">
              <div
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-[2rem] border shadow-2xl",
                  dark ? "border-white/10" : "border-white/70",
                )}
              >
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className={cn(
                    imageFit === "cover" ? "object-cover" : "object-contain p-8",
                  )}
                  priority
                />
                <div
                  className={cn(
                    "absolute inset-0",
                    imageFit === "contain"
                      ? "bg-gradient-to-br from-white/10 to-transparent"
                      : "bg-gradient-to-t from-spruce/35 via-transparent to-transparent",
                  )}
                  aria-hidden
                />
              </div>
              {badge ? (
                <div
                  className={cn(
                    "absolute -bottom-5 left-5 flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.72rem] font-medium shadow-xl backdrop-blur-md sm:left-8",
                    dark
                      ? "border border-white/15 bg-spruce/80 text-cream"
                      : "border border-white/70 bg-cream/90 text-spruce",
                  )}
                >
                  <Sparkles className="size-3.5 text-brass" aria-hidden />
                  {badge}
                </div>
              ) : null}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
