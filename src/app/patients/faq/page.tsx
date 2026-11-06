import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  CreditCard,
  Mail,
  Phone,
  Siren,
} from "lucide-react";
import { practice } from "@/content/site";
import { faqs } from "@/content/faq";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/site/CTASection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common dental questions from Dakota Dental Associates in Grand Forks — visit frequency, what to expect, emergencies, payment plans, whitening, veneers and bonding.",
  alternates: { canonical: "/patients/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Dakota Dental Associates",
    description: "Answers to the questions we hear most often.",
    url: "/patients/faq",
    images: [{ url: "/images/h-patient1.jpg" }],
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Answers, before you{" "}
            <span className="italic text-copper">ask.</span>
          </>
        }
        description="A few of the questions we hear most often. If yours is not here, our front office team is always happy to help."
        image="/images/h-patient1.jpg"
        imageAlt="A patient's healthy smile"
        breadcrumbs={[
          { label: "Patients", href: "/patients" },
          { label: "FAQ" },
        ]}
        badge="Plain answers"
      />

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <Reveal>
              <Eyebrow>Common questions</Eyebrow>
              <h2 className="mt-4 text-balance text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.08] text-spruce">
                Good to know before your visit.
              </h2>

              <Accordion type="single" collapsible className="mt-8 border-t border-spruce/10">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      {faq.answer.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 rounded-2xl border border-spruce/10 bg-white/50 p-5">
                <p className="text-[0.84rem] leading-relaxed text-stone">
                  For more detail on after-hours care, visit{" "}
                  <Link href="/patients/dental-first-aid" className="link">
                    Dental First Aid
                  </Link>
                  . For payment and insurance specifics, see{" "}
                  <Link href="/office/financial-insurance" className="link">
                    Financial &amp; Insurance
                  </Link>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <aside className="space-y-4 lg:sticky lg:top-28">
                <div className="rounded-3xl border border-spruce/10 bg-white/55 p-6">
                  <CalendarCheck className="size-6 text-copper" aria-hidden />
                  <p className="mt-3 font-display text-xl leading-snug text-spruce">
                    Ready to book?
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-stone">
                    Request an appointment online, or call and we will find a time
                    that works.
                  </p>
                  <a
                    href={practice.portal}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-spruce px-4 py-2.5 text-[0.78rem] font-medium text-cream transition-colors hover:bg-pine"
                  >
                    Request appointment
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                </div>

                <div className="rounded-3xl border border-copper/20 bg-copper/[0.05] p-6">
                  <Siren className="size-6 text-copper" aria-hidden />
                  <p className="mt-3 font-display text-xl leading-snug text-spruce">
                    Dental emergency?
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-stone">
                    Call us as soon as you can. We will work you into the schedule
                    during business hours, and our after-hours line can guide you
                    the rest of the time.
                  </p>
                  <a
                    href={practice.phoneHref}
                    className="mt-4 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-copper hover:text-spruce"
                  >
                    <Phone className="size-3.5" aria-hidden />
                    {practice.phone}
                  </a>
                </div>

                <div className="rounded-3xl border border-spruce/10 bg-white/55 p-6">
                  <CreditCard className="size-6 text-copper" aria-hidden />
                  <p className="mt-3 font-display text-xl leading-snug text-spruce">
                    Billing question?
                  </p>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-stone">
                    Our administrative team can explain payment options and help
                    you estimate your insurance portion.
                  </p>
                  <a
                    href={practice.emailHref}
                    className="mt-4 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-fern hover:text-spruce"
                  >
                    <Mail className="size-3.5" aria-hidden />
                    Email the office
                  </a>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Still have a question?"
        title="We would rather answer it than have you wonder."
        description="Call, email, or send a note through our contact form. Our team will get back to you during regular business hours."
      />
    </>
  );
}
