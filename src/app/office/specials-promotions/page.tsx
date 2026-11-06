import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bell,
  CreditCard,
  Gift,
  HeartHandshake,
  Mail,
  ShieldCheck,
  Smile,
  Sparkles,
  Tag,
} from "lucide-react";
import { practice } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading, Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Specials & Promotions",
  description:
    "Patient perks and periodic offers at Dakota Dental Associates in Grand Forks — bleaching specials, annual mouthguard specials, email alerts, uninsured patient program and CareCredit financing.",
  alternates: { canonical: "/office/specials-promotions" },
  openGraph: {
    title: "Specials & Promotions | Dakota Dental Associates",
    description: "Patient perks and periodic offers from our Grand Forks practice.",
    url: "/office/specials-promotions",
    images: [{ url: "/images/h-whitening.jpg" }],
  },
};

const perks = [
  {
    icon: Bell,
    title: "Email alerts",
    text: "As a patient of record, you can be the first to know about specials and promotions by email.",
  },
  {
    icon: Sparkles,
    title: "Periodic bleaching specials",
    text: "Patients of record are eligible for our periodic bleaching specials. Ask the front office for the current offer.",
  },
  {
    icon: ShieldCheck,
    title: "Annual mouthguard special",
    text: "Each year, patients of record can take advantage of our mouthguard special — useful for sport, grinding or both.",
  },
  {
    icon: Smile,
    title: "A free toothbrush",
    text: "Every hygiene visit includes a free toothbrush, because the everyday routine matters most.",
  },
  {
    icon: HeartHandshake,
    title: "No insurance? No problem.",
    text: "Ask about our special program for the uninsured. Our team will explain how it works and whether it fits your needs.",
  },
  {
    icon: CreditCard,
    title: "CareCredit financing",
    text: "CareCredit offers patient payment plans for treatment your insurance does not cover, with low minimum monthly payments.",
  },
];

export default function SpecialsPromotionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Specials & Promotions"
        title={
          <>
            A little extra for{" "}
            <span className="italic text-copper">our patients.</span>
          </>
        }
        description="As a patient of Dakota Dental Associates, you can take advantage of our current specials and promotions. Ask us for the details — offers change through the year."
        image="/images/h-whitening.jpg"
        imageAlt="A bright, healthy smile after professional whitening"
        breadcrumbs={[
          { label: "Office", href: "/office" },
          { label: "Specials & Promotions" },
        ]}
        badge="Patient perks"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={practice.phoneHref}>
              Ask about current offers
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/patients/patient-advantage">Patient Advantage</Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Patient Advantage"
            title="Good care, with a few good reasons to keep coming back."
            description="As a regular patient of record — current on your hygiene recall and treatment recommendations — these are some of the ways we want to reward your patronage."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <Reveal key={perk.title} delay={index * 0.04}>
                  <div className="flex h-full flex-col rounded-3xl border border-spruce/10 bg-white/50 p-6 transition-colors hover:border-spruce/20">
                    <span className="grid size-11 place-items-center rounded-full border border-copper/20 bg-copper/[0.06] text-copper">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-xl leading-tight text-spruce">
                      {perk.title}
                    </h3>
                    <p className="mt-2 text-[0.84rem] leading-relaxed text-stone">
                      {perk.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-8">
            <p className="rounded-2xl border border-spruce/10 bg-bone/60 px-5 py-4 text-[0.76rem] leading-relaxed text-stone">
              Specials and promotions are subject to change and may have
              eligibility requirements. Please call our office at{" "}
              <a href={practice.phoneHref} className="link">
                {practice.phone}
              </a>{" "}
              or email{" "}
              <a href={practice.emailHref} className="link">
                {practice.email}
              </a>{" "}
              for the current offer. They cannot be combined unless we say so.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Payment options</Eyebrow>
              <h2 className="text-balance text-[clamp(2rem,3.6vw,2.9rem)] leading-[1.08] text-spruce">
                Flexible ways to pay for the care you need.
              </h2>
              <p className="mt-5 max-w-md text-[0.94rem] leading-relaxed text-stone">
                Financial considerations should not be an obstacle to the care
                you deserve. Our office accepts cash, check, Visa, MasterCard,
                American Express and Discover — and offers several financing
                options.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="outline" size="md">
                  <Link href="/office/financial-insurance">
                    Financial &amp; insurance
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="md">
                  <Link href="/contact-us">Ask a billing question</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-3">
                <div className="flex items-start gap-4 rounded-2xl border border-spruce/10 bg-cream/80 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-fern/10 text-fern">
                    <Mail className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-lg text-spruce">
                      Stay on the list
                    </p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-stone">
                      Make sure we have your current email address. We will send
                      occasional notes about appointments, specials and practice
                      news — and you can opt out at any time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-spruce/10 bg-cream/80 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-fern/10 text-fern">
                    <Gift className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-lg text-spruce">
                      Refer a friend or family member
                    </p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-stone">
                      The best compliment you can give us is a recommendation. If
                      someone you know is looking for a dentist in Grand Forks, we
                      would be glad to welcome them.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-spruce/10 bg-cream/80 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-fern/10 text-fern">
                    <Tag className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-lg text-spruce">
                      New patient offers
                    </p>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-stone">
                      New to the practice? Call us before booking — our front
                      office team can tell you about any current new-patient
                      specials and help you prepare.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Questions are welcome"
        title="Ask us what is available right now."
        description="Offers change through the year. One quick call is the easiest way to get the current details."
      />
    </>
  );
}
