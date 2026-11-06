import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  Clock,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";
import { practice } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Map & Directions",
  description:
    "Directions to Dakota Dental Associates at 4000 17th Ave. S., Grand Forks, ND 58201. Interactive map, office hours, phone and contact information.",
  alternates: { canonical: "/office/map-directions" },
  openGraph: {
    title: "Map & Directions | Dakota Dental Associates",
    description: "Find us on 17th Avenue South in Grand Forks, ND.",
    url: "/office/map-directions",
    images: [{ url: "/images/31347-122003111147535-6311630-n.jpg" }],
  },
};

export default function MapDirectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Map & Directions"
        title={
          <>
            Right here in{" "}
            <span className="italic text-copper">Grand Forks.</span>
          </>
        }
        description="You will find our office at 4000 17th Ave. S. in Grand Forks. Use the interactive map for customized driving directions, or call and our team will help you plan your visit."
        image="/images/31347-122003111147535-6311630-n.jpg"
        imageAlt="The Dakota Dental Associates office"
        breadcrumbs={[
          { label: "Office", href: "/office" },
          { label: "Map & Directions" },
        ]}
        badge="4000 17th Ave. S."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={practice.mapUrl} target="_blank" rel="noreferrer">
              Open in Google Maps
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={practice.phoneHref}>
              <Phone className="size-4" aria-hidden />
              {practice.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <Reveal className="relative">
              <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-spruce/10 bg-bone lg:min-h-[560px]">
                <iframe
                  title="Map to Dakota Dental Associates"
                  src={practice.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-4">
                <div className="rounded-3xl border border-spruce/10 bg-white/55 p-6">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-copper">
                    Address
                  </p>
                  <p className="mt-3 font-display text-2xl leading-tight text-spruce">
                    Dakota Dental Associates
                  </p>
                  <p className="mt-2 flex items-start gap-2 text-[0.9rem] leading-relaxed text-stone">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden />
                    {practice.address.street}
                    <br />
                    {practice.address.city}, {practice.address.state}{" "}
                    {practice.address.zip}
                  </p>
                  <div className="mt-4 space-y-2 border-t border-spruce/10 pt-4 text-[0.84rem]">
                    <a
                      href={practice.phoneHref}
                      className="flex items-center gap-2 text-spruce transition-colors hover:text-copper"
                    >
                      <Phone className="size-3.5 text-copper" aria-hidden />
                      {practice.phone}
                    </a>
                    <a
                      href={practice.emailHref}
                      className="flex items-center gap-2 text-spruce transition-colors hover:text-copper"
                    >
                      <Mail className="size-3.5 text-copper" aria-hidden />
                      {practice.email}
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-spruce/10 bg-white/55 p-6">
                  <p className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-copper">
                    <Clock className="size-3.5" aria-hidden />
                    Office Hours
                  </p>
                  <dl className="mt-3 space-y-2 text-[0.82rem]">
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
                    The office is closed on major holidays, as well as the Friday
                    before Easter and the day after Thanksgiving.
                  </p>
                </div>

                <div className="rounded-3xl border border-fern/20 bg-fern/[0.05] p-6">
                  <p className="flex items-center gap-2 font-display text-lg text-spruce">
                    <CalendarCheck className="size-4 text-fern" aria-hidden />
                    Planning your visit?
                  </p>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-stone">
                    Find what to expect at your first appointment, insurance and
                    payment details, and information for new patients.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[0.78rem] font-medium">
                    <Link href="/patients/your-first-visit" className="link">
                      Your first visit
                    </Link>
                    <Link href="/new-patients" className="link">
                      New patients
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Driving directions"
            title="Use the interactive map — or ask us."
            description="For customized driving directions, use the map above. Click the red indicator, then choose “Get Directions.” You can switch between Map and Satellite view using the icon at the bottom right, and zoom with the + and − buttons."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-spruce/10 bg-cream/80 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-copper/[0.08] text-copper">
                  <Navigation className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg text-spruce">Interactive map</p>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-stone">
                    Click the red indicator on the map, then choose “Get
                    Directions.” Switch between Map and Satellite view with the
                    icon at the bottom right, and zoom with the + and − buttons.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-spruce/10 bg-cream/80 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-copper/[0.08] text-copper">
                  <MapPin className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg text-spruce">Our address</p>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-stone">
                    Dakota Dental Associates, {practice.address.street},{" "}
                    {practice.address.city}, {practice.address.state}{" "}
                    {practice.address.zip}. Enter the address in your preferred
                    navigation app.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-spruce/10 bg-cream/80 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-copper/[0.08] text-copper">
                  <Phone className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg text-spruce">Ask for help</p>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-stone">
                    Call{" "}
                    <a href={practice.phoneHref} className="link">
                      {practice.phone}
                    </a>{" "}
                    and our front office team will talk you in.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { src: "/images/1-9.jpg", alt: "Dakota Dental Associates exterior" },
                { src: "/images/31347-122003111147535-6311630-n.jpg", alt: "Dakota Dental Associates office" },
              ].map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-spruce/10"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <p className="mt-6 text-[0.78rem] text-stone">
            Looking for after-hours help?{" "}
            <Link href="/emergency-care" className="link">
              See our emergency care page
            </Link>
            .
          </p>
        </div>
      </section>

      <CTASection
        eyebrow="We are easy to find"
        title="Come see us on 17th Avenue South."
        description="Request an appointment online or call the office. We will make sure you know exactly where to go."
      />
    </>
  );
}
