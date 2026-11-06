import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Phone,
  ShieldAlert,
  Siren,
  Stethoscope,
} from "lucide-react";
import { practice } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Emergency Care",
  description:
    "After-hours and weekend dental emergency care at Dakota Dental Associates in Grand Forks. Call 701-775-0641 and follow the voicemail instructions. First aid guidance for toothache, broken teeth and more.",
  alternates: { canonical: "/emergency-care" },
  openGraph: {
    title: "Emergency Care | Dakota Dental Associates",
    description:
      "Dental emergencies do not wait. Here is how to reach us and what to do while you do.",
    url: "/emergency-care",
    images: [{ url: "/images/v-xray.jpg" }],
  },
};

const firstAid = [
  {
    title: "Toothache",
    text: "Begin by cleaning around the sore tooth meticulously. Use warm salt water and rinse the mouth to displace any food trapped between teeth. Under no circumstance should you use aspirin on the aching tooth or on the gum. Please contact us for an appointment if the pain or swelling persists more than a day.",
  },
  {
    title: "Cut or bitten tongue, lip or cheek",
    text: "An ice pack can be applied to any bruised area. For bleeding, apply firm but gentle pressure with damp, sterile gauze or a clean cloth. If the bleeding does not stop with pressure or continues after 15 minutes, go to an emergency room.",
  },
  {
    title: "Broken tooth",
    text: "Rinse the area with warm water. Recover any broken tooth fragments. Seek dental attention.",
  },
  {
    title: "Knocked-out permanent tooth",
    text: "Recover the tooth, making sure to hold it by the crown (top) and not the root. Rinse, but do not clean or handle the tooth more than necessary. Place the tooth in a cup containing milk and call the office immediately.",
  },
  {
    title: "Bleeding after a baby tooth falls out",
    text: "Fold a piece of damp gauze and place it firmly over the bleeding area. Apply pressure by biting down on the gauze for 15 minutes. Repeat as needed.",
  },
  {
    title: "Cold or canker sores",
    text: "Over-the-counter medications usually will provide temporary relief. If sores persist, visit our office.",
  },
];

export default function EmergencyCarePage() {
  return (
    <>
      <PageHero
        eyebrow="Emergency Care"
        title={
          <>
            When it cannot{" "}
            <span className="italic text-brass">wait.</span>
          </>
        }
        description="Dental emergencies do not just happen from 9 to 5. We offer after-hours and weekend emergency services for our patients of record — and clear guidance for what to do right now."
        image="/images/v-xray.jpg"
        imageAlt="Dental X-ray at Dakota Dental Associates"
        breadcrumbs={[{ label: "Emergency Care" }]}
        variant="dark"
        badge="Call 701-775-0641"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="copper" size="lg">
            <a href={practice.phoneHref}>
              <Phone className="size-4" aria-hidden />
              Call {practice.phone}
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="lg">
            <Link href="/patients/dental-first-aid">Full first aid guide</Link>
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-spruce/10 bg-bone/60 py-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-3xl bg-spruce px-6 py-7 text-cream sm:px-9 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-brass/30 bg-brass/10 text-brass">
                  <Siren className="size-6" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-2xl">Call first. We will guide you.</p>
                  <p className="mt-1 max-w-2xl text-[0.86rem] leading-relaxed text-cream/60">
                    During business hours, we will work you into the schedule. After
                    hours, call the office and follow the voicemail instructions to
                    reach the on-call staff member.
                  </p>
                </div>
              </div>
              <Button asChild variant="light" size="lg" className="shrink-0">
                <a href={practice.phoneHref}>
                  <Phone className="size-4" aria-hidden />
                  {practice.phone}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="After-hours service"
                title="How it works."
                description="Our emergency on-call system is available to Dakota Dental patients of record who are current on their hygiene recall and treatment recommendations."
              />

              <div className="mt-8 space-y-3">
                {[
                  {
                    step: "01",
                    title: "Call the office",
                    text: `Dial ${practice.phone}. The voicemail will explain how to reach the on-call staff member.`,
                  },
                  {
                    step: "02",
                    title: "Describe what happened",
                    text: "You will be asked about the nature of your emergency. Depending on the severity and time of day, you may be seen.",
                  },
                  {
                    step: "03",
                    title: "Follow the guidance",
                    text: "Special emphasis is given to emergencies involving trauma and infection. No narcotics will be prescribed.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 rounded-2xl border border-spruce/10 bg-white/50 p-5"
                  >
                    <span className="font-mono text-[0.72rem] font-medium text-copper">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-display text-lg leading-tight text-spruce">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[0.84rem] leading-relaxed text-stone">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-spruce/10 bg-white/55 p-6 sm:p-7">
                <p className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-copper">
                  <Clock className="size-3.5" aria-hidden />
                  After-hours phone coverage
                </p>
                <dl className="mt-4 space-y-3 text-[0.86rem]">
                  {practice.emergencyHours.map((entry) => (
                    <div
                      key={entry.day}
                      className="flex items-baseline justify-between gap-4 border-b border-spruce/10 pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-stone">{entry.day}</dt>
                      <dd className="text-right font-medium text-spruce">
                        {entry.time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-copper/20 bg-copper/[0.05] p-4">
                  <ShieldAlert className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden />
                  <p className="text-[0.76rem] leading-relaxed text-stone">
                    This service is for patients of record. If you are not yet a
                    patient, call during office hours and we will help you find the
                    right next step.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-spruce/10 bg-white/55 p-6">
                <Stethoscope className="size-6 text-fern" aria-hidden />
                <p className="mt-3 font-display text-xl text-spruce">
                  During regular hours
                </p>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-stone">
                  Call as soon as you determine you have a dental emergency. We
                  will be glad to work you into our schedule.
                </p>
                <p className="mt-3 text-[0.74rem] text-stone">
                  Mon–Wed 7:10–5 · Thu 7:10–12 &amp; 1–5 · Fri 8–12
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Dental first aid"
            title="What to do while you wait."
            description="These steps can help you stay comfortable and protect the tooth until you can be seen. They are not a substitute for professional care."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            <Reveal>
              <Accordion type="single" collapsible className="border-t border-spruce/10">
                {firstAid.map((item, index) => (
                  <AccordionItem key={item.title} value={`first-aid-${index}`}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                      <p>{item.text}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>

            <Reveal delay={0.08}>
              <aside className="rounded-3xl bg-spruce p-6 text-cream lg:sticky lg:top-28">
                <Siren className="size-6 text-brass" aria-hidden />
                <p className="mt-3 font-display text-xl leading-snug">
                  Severe swelling, trouble breathing or uncontrolled bleeding?
                </p>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-cream/60">
                  Call 911 or go to the nearest emergency room. Dental offices are
                  not equipped for life-threatening emergencies.
                </p>
                <Button asChild variant="light" size="md" className="mt-5 w-full">
                  <a href={practice.phoneHref}>
                    <Phone className="size-3.5" aria-hidden />
                    Call the office
                  </a>
                </Button>
                <Link
                  href="/patients/dental-first-aid"
                  className="mt-3 flex items-center justify-center gap-1 text-[0.76rem] text-brass hover:text-cream"
                >
                  Read the full first aid guide
                  <ArrowUpRight className="size-3" aria-hidden />
                </Link>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="We are here"
        title="You do not have to guess what to do next."
        description="Call the office and we will help you decide whether you need to be seen, what to do in the meantime, and when to come in."
      />
    </>
  );
}
