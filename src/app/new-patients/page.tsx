import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  HeartHandshake,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { practice } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading, Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "New to Dakota Dental Associates in Grand Forks? Here is what to expect at your first visit, what to bring, how insurance works, and how to request an appointment.",
  alternates: { canonical: "/new-patients" },
  openGraph: {
    title: "New Patients | Dakota Dental Associates",
    description:
      "A warm welcome and a clear first-visit checklist for new patients in Grand Forks.",
    url: "/new-patients",
    images: [{ url: "/images/s-patient1.jpg" }],
  },
};

const steps = [
  {
    title: "Send us your insurance information",
    text: "When setting up your first appointment, we will ask about any dental insurance you would like us to keep on file. We will need the insured person's name, address, phone number and Social Security number, along with their insurance member ID and the name of the employer who provides the insurance.",
  },
  {
    title: "Bring your insurance card",
    text: "Bring a copy to your first visit, or send it before that day. This lets us get everything on file to expedite claims and reduce paperwork and costs for you.",
  },
  {
    title: "No insurance? No problem.",
    text: "Ask about our special program for the uninsured. Our team will explain how it works and whether it fits your needs.",
  },
  {
    title: "Arrive at least 15 minutes early",
    text: "You will have time to stop at our convenient medical history kiosk and share important information that is crucial to your care. Bring a list of all current medications — both prescribed and over-the-counter.",
  },
  {
    title: "Request current X-rays",
    text: "If you have current X-rays from another office, call your previous office and ask that they be sent so they arrive at least 24 hours before your appointment. Current X-rays are bitewings taken within a year, or pano/full-mouth images taken within three to five years. Without them, we may need to take new ones — which can incur unnecessary out-of-pocket expenses.",
  },
  {
    title: "Plan for payment",
    text: "If you provide all proper insurance information in advance, we will ask you to pay only your estimated portion on the day of treatment. You may continue to receive statements while we wait for your insurance company to process claims.",
  },
  {
    title: "Bring a parent or guardian if needed",
    text: "We expect a parent or guardian to arrive with any patient 18 years old or younger. This ensures you can sign off on recommended treatment — such as fluoride decisions or silver- versus tooth-colored fillings — and update medical history and your personal profile.",
  },
  {
    title: "Share an email address",
    text: "We will ask for an email address in case you would like us to email you about upcoming appointments. You can opt out at any time.",
  },
  {
    title: "Allow enough time",
    text: "Please allow 80 minutes for your very first hygiene visit. After that, adult appointments generally take about 50 minutes. Appointments for children 11 or younger are generally 30 minutes long.",
  },
];

const perks = [
  "Email alerts about specials and promotions",
  "Access to our after-hours emergency service",
  "Periodic bleaching specials",
  "A free toothbrush at each hygiene visit",
  "Our annual mouthguard special",
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="New Patients"
        title={
          <>
            A warm welcome, and a{" "}
            <span className="italic text-copper">clear start.</span>
          </>
        }
        description="We want your visit to Dakota Dental Associates to be a comfortable, pleasant and easy experience. Here is exactly what to expect — and how to make the first appointment go smoothly."
        image="/images/s-patient1.jpg"
        imageAlt="A new patient at Dakota Dental Associates"
        breadcrumbs={[{ label: "New Patients" }]}
        badge="Now welcoming new patients"
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
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Before your visit</Eyebrow>
              <h2 className="mt-4 max-w-md text-balance text-[clamp(2rem,4vw,3.2rem)] leading-[1.06] text-spruce">
                Nine small steps. One easy first visit.
              </h2>
              <p className="mt-5 max-w-md text-[0.92rem] leading-relaxed text-stone">
                If you get these pieces in place ahead of time, the appointment
                itself is simple. And if you are unsure about any of it, call us —
                we will walk you through it.
              </p>

              <div className="mt-7 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-spruce/10 bg-white/50 px-4 py-3">
                  <CalendarClock className="size-4 shrink-0 text-copper" aria-hidden />
                  <p className="text-[0.8rem] text-spruce">
                    First hygiene visit: about <strong>80 minutes</strong>
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-spruce/10 bg-white/50 px-4 py-3">
                  <ShieldCheck className="size-4 shrink-0 text-copper" aria-hidden />
                  <p className="text-[0.8rem] text-spruce">
                    All information is kept secure and used only on your behalf
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-spruce/10 bg-white/50 px-4 py-3">
                  <HeartHandshake className="size-4 shrink-0 text-copper" aria-hidden />
                  <p className="text-[0.8rem] text-spruce">
                    No insurance? Ask about our uninsured patient program
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ol className="space-y-3">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex items-start gap-4 rounded-2xl border border-spruce/10 bg-white/50 p-5"
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-spruce font-mono text-[0.68rem] text-cream">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display text-lg leading-tight text-spruce">
                        {step.title}
                      </p>
                      <p className="mt-1 text-[0.84rem] leading-relaxed text-stone">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-spruce/10 bg-bone/45 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Insurance & payment"
                title="Straightforward from the start."
                description="Financial considerations should not be an obstacle to the care you deserve. We accept cash, check, Visa, MasterCard, American Express and Discover — and offer several financing options."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="md">
                  <Link href="/office/financial-insurance">
                    Financial &amp; insurance details
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="md">
                  <Link href="/contact-us">Ask a billing question</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-3">
                <div className="flex items-start gap-4 rounded-2xl border border-spruce/10 bg-cream/80 p-5">
                  <CreditCard className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden />
                  <p className="text-[0.85rem] leading-relaxed text-stone">
                    We request payment on the day of service. If you have dental
                    insurance, we will estimate your coverage and collect only the
                    estimated portion at that time.
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-spruce/10 bg-cream/80 p-5">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden />
                  <p className="text-[0.85rem] leading-relaxed text-stone">
                    We are in network with Delta Dental Premier (not PPO) and
                    United Concordia. As a courtesy, we will assist with submitting
                    claims if permitted by your provider.
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-spruce/10 bg-cream/80 p-5">
                  <CreditCard className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden />
                  <p className="text-[0.85rem] leading-relaxed text-stone">
                    CareCredit may make it possible to finance up to 100 percent of
                    your dental care, with no upfront costs, no annual fees and no
                    prepayment penalties. Ask us for details.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Patient Advantage"
                title="A few good reasons to stay with us."
                description="As a regular patient of record — current on your hygiene recall and treatment recommendations — we want to reward your patronage."
              />
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2 rounded-xl border border-spruce/10 bg-white/50 px-3 py-2.5 text-[0.78rem] leading-snug text-spruce"
                  >
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-fern" aria-hidden />
                    {perk}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" size="md" className="mt-6">
                <Link href="/patients/patient-advantage">
                  Explore Patient Advantage
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </Button>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl bg-spruce p-7 text-cream">
                <ClipboardList className="size-6 text-brass" aria-hidden />
                <p className="mt-4 font-display text-2xl leading-snug">
                  Helpful pages for your first week
                </p>
                <div className="mt-5 grid gap-2">
                  {[
                    { label: "Your first visit", href: "/patients/your-first-visit" },
                    { label: "Common questions (FAQ)", href: "/patients/faq" },
                    { label: "Dental first aid", href: "/patients/dental-first-aid" },
                    { label: "Map & directions", href: "/office/map-directions" },
                    { label: "Office policies", href: "/office/office-policies-mission" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[0.82rem] text-cream/75 transition-colors hover:border-brass/40 hover:text-cream"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5 text-brass" aria-hidden />
                    </Link>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[0.76rem] text-cream/55">
                  <Mail className="size-3.5 text-brass" aria-hidden />
                  Questions?{" "}
                  <a href={practice.emailHref} className="text-brass hover:text-cream">
                    {practice.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="We look forward to meeting you"
        title="Your first visit starts with a hello."
        description="Request an appointment online or call our Grand Forks office. We will help you find a time and make sure you know what to bring."
      />
    </>
  );
}
