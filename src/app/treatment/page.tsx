import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Siren } from "lucide-react";
import { practice, nav } from "@/content/site";
import { contentPageMap } from "@/content/pages";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Comprehensive dental treatment in Grand Forks, ND: general dentistry, CEREC same-day crowns, orthodontics, Invisalign, cosmetic dentistry, implants, gum disease care, TMJ/TMD and snoring therapy.",
  alternates: { canonical: "/treatment" },
  openGraph: {
    title: "Treatments | Dakota Dental Associates",
    description:
      "One office for every stage of your smile — from routine cleanings to same-day crowns and orthodontics.",
    url: "/treatment",
    images: [{ url: "/images/photo-cerec.jpg" }],
  },
};

export default function TreatmentPage() {
  const group = nav.find((item) => item.href === "/treatment");
  const treatments = group?.children ?? [];

  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title={
          <>
            One office. Every stage of{" "}
            <span className="italic text-copper">your smile.</span>
          </>
        }
        description="Our larger staff and state-of-the-art Grand Forks office let us care for a broad range of needs — from early dental care and basic fillings to orthodontics, dentures, root canals, guided implants and one-appointment CEREC crowns."
        image="/images/photo-cerec.jpg"
        imageAlt="CEREC same-day ceramic restoration"
        breadcrumbs={[{ label: "Treatment" }]}
        variant="dark"
        badge="General & cosmetic care"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="light" size="lg">
            <a href={practice.portal} target="_blank" rel="noreferrer">
              Request an appointment
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="lg">
            <Link href="/patients/before-after-photos">See real results</Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Comprehensive dental care"
            title="Care that meets you where you are."
            description="We know the value of your time. Our seven-chair hygiene department helps streamline busy schedules, while our in-house lab and digital tools keep treatment precise and efficient."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item, index) => {
              const page = contentPageMap.get(item.href);
              return (
                <Reveal key={item.href} delay={index * 0.03}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-spruce/10 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-spruce/20 hover:shadow-[0_24px_60px_-40px_rgba(11,43,37,0.5)]"
                  >
                    {page?.heroImage ? (
                      <div className="relative aspect-[16/9] overflow-hidden border-b border-spruce/10 bg-bone">
                        <Image
                          src={page.heroImage}
                          alt={page.heroImageAlt ?? item.label}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-spruce/25 via-transparent to-transparent"
                          aria-hidden
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[16/9] items-center justify-center border-b border-spruce/10 bg-bone text-copper">
                        <Sparkles className="size-7" aria-hidden />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="font-display text-xl leading-tight text-spruce">
                          {item.label}
                        </h2>
                        <ArrowUpRight
                          className="mt-1 size-4 shrink-0 text-copper/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </div>
                      <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-stone">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-spruce/10 bg-bone/45 py-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 rounded-3xl bg-spruce px-6 py-7 text-cream sm:flex-row sm:items-center sm:justify-between sm:px-9">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brass/30 bg-brass/10 text-brass">
                <Siren className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-display text-xl">Not sure what you need?</p>
                <p className="mt-1 max-w-2xl text-[0.84rem] leading-relaxed text-cream/60">
                  Start with a conversation. We will examine, explain your
                  options, and help you choose a plan that fits your needs.
                </p>
              </div>
            </div>
            <Button asChild variant="light" size="md" className="shrink-0">
              <Link href="/contact-us">
                Ask a question
                <ArrowUpRight className="size-3.5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Plan your visit"
        title="Let's take the next step together."
        description="Request an appointment online or call our Grand Forks office. We will help you find a time that fits your schedule."
      />
    </>
  );
}
