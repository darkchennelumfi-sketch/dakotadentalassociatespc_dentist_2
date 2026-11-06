import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Siren,
} from "lucide-react";
import { practice } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Dakota Dental Associates at 4000 17th Ave. S., Grand Forks, ND 58201. Call 701-775-0641, email dda@dakotadentalnd.com, or send a message through our contact form.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us | Dakota Dental Associates",
    description:
      "Call, email, or visit our Grand Forks office. We are always happy to talk with you.",
    url: "/contact-us",
    images: [{ url: "/images/1-9.jpg" }],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            We are always glad{" "}
            <span className="italic text-copper">to talk.</span>
          </>
        }
        description="Feel free to contact us during office hours by phone or email. After hours, please leave a detailed message and we will return your call as soon as possible."
        image="/images/1-9.jpg"
        imageAlt="Dakota Dental Associates in Grand Forks"
        breadcrumbs={[{ label: "Contact Us" }]}
        badge="701-775-0641"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={practice.phoneHref}>
              <Phone className="size-4" aria-hidden />
              Call the office
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={practice.emailHref}>
              <Mail className="size-4" aria-hidden />
              Email us
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Get in touch"
                title="A real person answers."
                description="Our knowledgeable and friendly staff is always available to talk with you and address any concerns you may have."
              />

              <div className="mt-8 space-y-3">
                <a
                  href={practice.phoneHref}
                  className="group flex items-start gap-4 rounded-2xl border border-spruce/10 bg-white/50 p-5 transition-colors hover:border-spruce/20 hover:bg-white/70"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-copper/[0.08] text-copper">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-lg text-spruce">
                      {practice.phone}
                    </span>
                    <span className="mt-0.5 block text-[0.78rem] text-stone">
                      Call during office hours
                    </span>
                  </span>
                </a>

                <a
                  href={practice.emailHref}
                  className="group flex items-start gap-4 rounded-2xl border border-spruce/10 bg-white/50 p-5 transition-colors hover:border-spruce/20 hover:bg-white/70"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-copper/[0.08] text-copper">
                    <Mail className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-lg text-spruce">
                      {practice.email}
                    </span>
                    <span className="mt-0.5 block text-[0.78rem] text-stone">
                      Email the front office
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-spruce/10 bg-white/50 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-copper/[0.08] text-copper">
                    <MapPin className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-lg leading-tight text-spruce">
                      {practice.address.street}
                    </p>
                    <p className="mt-0.5 text-[0.78rem] text-stone">
                      {practice.address.city}, {practice.address.state}{" "}
                      {practice.address.zip}
                    </p>
                    <Link
                      href="/office/map-directions"
                      className="mt-2 inline-flex items-center gap-1 text-[0.74rem] font-medium text-fern hover:text-spruce"
                    >
                      Map &amp; directions
                      <ArrowUpRight className="size-3" aria-hidden />
                    </Link>
                  </div>
                </div>

                <div className="rounded-2xl border border-spruce/10 bg-white/50 p-5">
                  <p className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-copper">
                    <Clock className="size-3.5" aria-hidden />
                    Office Hours
                  </p>
                  <dl className="mt-3 space-y-2 text-[0.8rem]">
                    {practice.hours.map((entry) => (
                      <div
                        key={entry.day}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <dt className="text-stone">{entry.day}</dt>
                        <dd className="text-right font-medium text-spruce">
                          {entry.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 border-t border-spruce/10 pt-3 text-[0.72rem] leading-relaxed text-stone">
                    Closed on major holidays, the Friday before Easter, and the
                    day after Thanksgiving.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-14">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal className="relative">
              <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-spruce/10 bg-bone">
                <iframe
                  title="Map to Dakota Dental Associates"
                  src={practice.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full"
                />
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="flex h-full flex-col justify-between rounded-[2rem] bg-spruce p-7 text-cream">
                <div>
                  <Siren className="size-6 text-brass" aria-hidden />
                  <p className="mt-4 font-display text-2xl leading-snug">
                    Dental emergency after hours?
                  </p>
                  <p className="mt-3 text-[0.86rem] leading-relaxed text-cream/60">
                    Call our office at {practice.phone} and follow the voicemail
                    instructions to reach the on-call staff member. Our after-hours
                    service is available to patients of record.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <Button asChild variant="light" size="md" className="w-full">
                    <Link href="/emergency-care">
                      Emergency care details
                      <ArrowUpRight className="size-3.5" aria-hidden />
                    </Link>
                  </Button>
                  <Button asChild variant="outlineLight" size="md" className="w-full">
                    <a href={practice.phoneHref}>
                      <Phone className="size-3.5" aria-hidden />
                      {practice.phone}
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="We look forward to hearing from you"
        title="Questions, comments, or just want to say hello?"
        description="Call, email, or send a message. Our front office team will follow up during regular business hours."
      />
    </>
  );
}
