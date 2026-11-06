import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Home, Phone, Search } from "lucide-react";
import { practice } from "@/content/site";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0 radial-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />

      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-copper">
          Error 404
        </span>
        <p className="mt-4 font-display text-[clamp(5rem,16vw,10rem)] leading-none text-spruce">
          4<span className="italic text-copper">0</span>4
        </p>
        <h1 className="mt-4 text-balance text-[clamp(1.8rem,4vw,3rem)] leading-tight text-spruce">
          This page seems to have wandered off.
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-[0.98rem] leading-relaxed text-stone">
          The link may be old, or the page may have moved. Let us help you find
          your way back — or call the office and we will point you in the right
          direction.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="size-4" aria-hidden />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact-us">
              Contact us
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid w-full gap-3 sm:grid-cols-3">
          {[
            { label: "Find a treatment", href: "/treatment", icon: Search },
            { label: "Patient guide", href: "/patients", icon: ArrowLeft },
            { label: "Call the office", href: practice.phoneHref, icon: Phone },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between gap-2 rounded-2xl border border-spruce/10 bg-white/50 px-4 py-3.5 text-left text-[0.8rem] font-medium text-spruce transition-colors hover:border-spruce/25 hover:bg-white/70"
              >
                <span className="flex items-center gap-2">
                  <Icon className="size-3.5 text-copper" aria-hidden />
                  {item.label}
                </span>
                <ArrowUpRight
                  className="size-3.5 text-copper/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
