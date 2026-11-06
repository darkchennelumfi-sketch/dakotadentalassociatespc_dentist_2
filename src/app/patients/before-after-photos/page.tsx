import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Images, Sparkles } from "lucide-react";
import { practice } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { SmileGallery } from "@/components/site/SmileGallery";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Before & After Photos",
  description:
    "See actual patient results from Dakota Dental Associates in Grand Forks — implants, veneers, CEREC restorations, bridges, composites, fillings, bleaching and crowns.",
  alternates: { canonical: "/patients/before-after-photos" },
  openGraph: {
    title: "Before & After Photos | Dakota Dental Associates",
    description: "Actual patients, real results. Drag each photo to compare.",
    url: "/patients/before-after-photos",
    images: [{ url: "/images/veneers-after-1.jpg" }],
  },
};

export default function BeforeAfterPage() {
  return (
    <>
      <PageHero
        eyebrow="Smile Gallery"
        title={
          <>
            Real patients.{" "}
            <span className="italic text-copper">Real results.</span>
          </>
        }
        description="A selection of actual patients of Drs. Paul Bothun and Heidi Stevens. Drag the handle on any image to compare before and after."
        image="/images/veneers-after-1.jpg"
        imageAlt="A smile after veneer treatment at Dakota Dental Associates"
        breadcrumbs={[
          { label: "Patients", href: "/patients" },
          { label: "Before & After Photos" },
        ]}
        badge="Drag to compare"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={practice.portal} target="_blank" rel="noreferrer">
              Request a consultation
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/treatment/cosmetic-dentistry">Cosmetic dentistry</Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Browse the gallery"
            title="See how careful dentistry can change a smile."
            description="Filter by treatment type. Every case is different — and every result is planned around the person in the chair."
          />

          <div className="mt-10">
            <SmileGallery />
          </div>

          <Reveal className="mt-8">
            <div className="flex flex-col gap-4 rounded-2xl border border-spruce/10 bg-white/50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-copper/10 text-copper">
                  <Images className="size-4" aria-hidden />
                </span>
                <p className="max-w-2xl text-[0.8rem] leading-relaxed text-stone">
                  The photos on this page are actual patients of Drs. Paul Bothun
                  and Heidi Stevens. Results may vary in individual cases.
                </p>
              </div>
              <Link
                href="/office/specials-promotions"
                className="inline-flex shrink-0 items-center gap-1 text-[0.78rem] font-medium text-fern hover:text-spruce"
              >
                Current specials
                <ArrowUpRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Veneers",
                text: "Porcelain veneers are designed to look like natural teeth and are individually attached to the fronts of your existing teeth. They can close gaps, correct chips and refine shape.",
              },
              {
                title: "Bonding & composites",
                text: "A tooth-colored composite can fill in areas of your teeth and correct chipping and shape problems, color-matched to the rest of your smile.",
              },
              {
                title: "CEREC & crowns",
                text: "A permanent ceramic restoration can be designed, fabricated and placed in a single visit — with no temporaries and no second appointment.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-3xl border border-spruce/10 bg-cream/80 p-6">
                  <Sparkles className="size-5 text-copper" aria-hidden />
                  <h3 className="mt-4 font-display text-xl text-spruce">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-stone">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Your smile, your plan"
        title="Let's talk about what is possible."
        description="A consultation is the best way to understand your options. We will listen, examine, and explain the choices in plain language."
      />
    </>
  );
}
