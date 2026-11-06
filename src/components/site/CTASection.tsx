import { ArrowUpRight, Phone } from "lucide-react";
import { practice } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./SectionHeading";

export function CTASection({
  eyebrow = "Your next step",
  title = "Ready for a healthier, happier smile?",
  description = "Request an appointment online or call our Grand Forks office. We will help you find a time that fits your schedule.",
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden bg-cream py-16 sm:py-24 ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-spruce px-6 py-12 text-cream sm:px-12 sm:py-16">
            <div className="absolute inset-0 radial-glow-dark" aria-hidden />
            <div className="absolute inset-0 hero-grid-dark" aria-hidden />
            <div
              className="absolute -right-24 -top-24 size-72 rounded-full border border-brass/20"
              aria-hidden
            />
            <div
              className="absolute -bottom-32 -left-20 size-72 rounded-full border border-cream/10"
              aria-hidden
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
              <div>
                <Eyebrow tone="dark">{eyebrow}</Eyebrow>
                <h2 className="mt-4 max-w-2xl text-balance text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] text-cream">
                  {title}
                </h2>
                <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-cream/65">
                  {description}
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button asChild variant="copper" size="lg" className="w-full lg:w-auto">
                  <a href={practice.portal} target="_blank" rel="noreferrer">
                    Request an Appointment
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </Button>
                <Button asChild variant="outlineLight" size="lg" className="w-full lg:w-auto">
                  <a href={practice.phoneHref}>
                    <Phone className="size-4" aria-hidden />
                    {practice.phone}
                  </a>
                </Button>
                <p className="mt-1 text-[0.7rem] text-cream/45 lg:text-right">
                  Mon–Wed 7:10–5 · Thu 7:10–12 & 1–5 · Fri 8–12
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
