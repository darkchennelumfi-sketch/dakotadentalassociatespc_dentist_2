import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarClock,
  ClipboardCheck,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { practice, nav } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading, Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Patient Guide",
  description:
    "Everything you need for a smooth visit to Dakota Dental Associates in Grand Forks — your first visit, insurance, patient advantages, dental health guides, FAQ, first aid and more.",
  alternates: { canonical: "/patients" },
  openGraph: {
    title: "Patient Guide | Dakota Dental Associates",
    description:
      "Feel prepared, informed and at home before your first appointment.",
    url: "/patients",
    images: [{ url: "/images/s-patient1.jpg" }],
  },
};

const atAGlance = [
  {
    icon: ClipboardCheck,
    title: "Arrive 15 minutes early",
    text: "Use the medical history kiosk and bring a list of all current medications — prescribed and over-the-counter.",
  },
  {
    icon: ShieldCheck,
    title: "Bring your insurance card",
    text: "We will keep your information secure and use it only to file claims and help you make treatment decisions.",
  },
  {
    icon: CalendarClock,
    title: "Allow about 80 minutes",
    text: "For your first hygiene visit. After that, adult appointments generally take about 50 minutes; children 11 and younger about 30.",
  },
];

export default function PatientsPage() {
  const group = nav.find((item) => item.href === "/patients");
  const pages = group?.children ?? [];

  return (
    <>
      <PageHero
        eyebrow="Patient Guide"
        title={
          <>
            Feel prepared before{" "}
            <span className="italic text-copper">you arrive.</span>
          </>
        }
        description="From your first visit to everyday oral health, this is where you will find the practical answers, forms and friendly guidance you need."
        image="/images/s-patient1.jpg"
        imageAlt="A patient at Dakota Dental Associates"
        breadcrumbs={[{ label: "Patients" }]}
        badge="New patients welcome"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={practice.portal} target="_blank" rel="noreferrer">
              Request an appointment
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/patients/your-first-visit">Your first visit</Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <Eyebrow>At a glance</Eyebrow>
              <h2 className="mt-4 max-w-md text-balance text-[clamp(2rem,4vw,3.2rem)] leading-[1.06] text-spruce">
                A little preparation goes a long way.
              </h2>
              <p className="mt-5 max-w-md text-[0.92rem] leading-relaxed text-stone">
                We want your visit to be comfortable, pleasant and easy. Here are
                the three things that help the most.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="outline" size="md">
                  <Link href="/patients/faq">
                    Read the FAQ
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="md">
                  <Link href="/office/financial-insurance">Insurance &amp; payment</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-3">
                {atAGlance.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-spruce/10 bg-white/50 p-5"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-copper/[0.08] text-copper">
                        <Icon className="size-4.5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-display text-lg leading-tight text-spruce">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[0.82rem] leading-relaxed text-stone">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Patient resources"
            title="Find exactly what you need."
            description="Fourteen pages of practical guidance, from insurance and sterilization to brushing, flossing and after-hours first aid."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.025}>
                <Link
                  href={item.href}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-spruce/10 bg-cream/80 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-spruce/20 hover:bg-cream"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-copper/20 bg-copper/[0.05] text-copper">
                    {item.href === "/patients/your-first-visit" ? (
                      <CalendarClock className="size-4" aria-hidden />
                    ) : item.href === "/patients/patient-advantage" ? (
                      <HeartHandshake className="size-4" aria-hidden />
                    ) : item.href === "/patients/sterilization-water-filtration" ? (
                      <ShieldCheck className="size-4" aria-hidden />
                    ) : (
                      <Sparkles className="size-4" aria-hidden />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-start justify-between gap-2">
                      <span className="font-display text-lg leading-tight text-spruce">
                        {item.label}
                      </span>
                      <ArrowUpRight
                        className="mt-0.5 size-3.5 shrink-0 text-copper/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                    <span className="mt-1 block text-[0.78rem] leading-snug text-stone">
                      {item.description}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Questions are welcome"
        title="If you are not sure where to start, just ask."
        description="Our front office team can point you to the right page, help with insurance, or find a time that works for your family."
      />
    </>
  );
}
