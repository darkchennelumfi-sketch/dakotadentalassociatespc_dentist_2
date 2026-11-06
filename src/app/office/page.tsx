import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardList,
  CreditCard,
  MapPin,
  PartyPopper,
  Play,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";
import { practice, nav, stats, officeGallery } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading, Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Office",
  description:
    "Tour Dakota Dental Associates in Grand Forks, ND. Meet our team, review office policies, explore financial and insurance options, and find directions to 4000 17th Ave. S.",
  alternates: { canonical: "/office" },
  openGraph: {
    title: "The Office | Dakota Dental Associates",
    description:
      "A practice built around comfort, safety and the people of Grand Forks.",
    url: "/office",
    images: [{ url: "/images/1-9.jpg" }],
  },
};

const icons: Record<string, typeof Users> = {
  "/office/office-video-tour": Play,
  "/office/meet-the-team": Users,
  "/office/office-policies-mission": ClipboardList,
  "/office/financial-insurance": CreditCard,
  "/office/map-directions": MapPin,
  "/office/practice-events": PartyPopper,
  "/office/specials-promotions": Tag,
};

const facility = [
  "A fully equipped in-house dental lab",
  "3-D digital scanning and CEREC same-day restorations",
  "A high-tech sterilization center",
  "Full-time treatment and hygiene coordinators",
];

export default function OfficePage() {
  const group = nav.find((item) => item.href === "/office");
  const pages = group?.children ?? [];

  return (
    <>
      <PageHero
        eyebrow="The Office"
        title={
          <>
            A practice built around the way{" "}
            <span className="italic text-copper">you live.</span>
          </>
        }
        description="The space, the people, and the small details that make a visit feel easy — all under one roof in Grand Forks."
        image="/images/1-9.jpg"
        imageAlt="The exterior of Dakota Dental Associates"
        breadcrumbs={[{ label: "Office" }]}
        badge="4000 17th Ave. S."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={practice.portal} target="_blank" rel="noreferrer">
              Request an appointment
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/office/office-video-tour">
              <Play className="size-4" aria-hidden />
              Watch the tour
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Welcome in</Eyebrow>
              <h2 className="mt-4 max-w-md text-balance text-[clamp(2rem,4vw,3.2rem)] leading-[1.06] text-spruce">
                Comfort is part of the care.
              </h2>
              <p className="mt-5 max-w-md text-[0.92rem] leading-relaxed text-stone">
                Our entire facility was designed with infection control and
                patient privacy in mind — and with the little conveniences that
                make appointments easier to fit into a real week.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-5 text-[1rem] leading-[1.8] text-ink/78">
                <p>
                  Thank you for visiting our website. We hope you find it helpful
                  and informative. Please feel free to contact us with any
                  questions or comments you may have — we look forward to hearing
                  from you.
                </p>
                <p>
                  Our staff includes full-time treatment and hygiene coordinators
                  who guide you through every step of your treatment. We believe
                  the one-on-one approach is the key to understanding your options
                  and achieving a healthy, happy smile.
                </p>
                <ul className="grid gap-2.5 pt-1 sm:grid-cols-2">
                  {facility.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-xl border border-spruce/10 bg-white/45 px-3 py-2.5 text-[0.78rem] leading-snug text-spruce"
                    >
                      <Sparkles
                        className="mt-0.5 size-3.5 shrink-0 text-copper"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-spruce/10 bg-bone/55 py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.05}>
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Explore the office"
            title="Everything you might want to know before you arrive."
            description="From a first look inside to the paperwork and payment details, these pages cover the practical side of visiting Dakota Dental."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((item, index) => {
              const Icon = icons[item.href] ?? Sparkles;
              return (
                <Reveal key={item.href} delay={index * 0.04}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-3xl border border-spruce/10 bg-white/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-spruce/20 hover:bg-cream hover:shadow-[0_24px_60px_-40px_rgba(11,43,37,0.5)]"
                  >
                    <span className="grid size-11 place-items-center rounded-full border border-copper/20 bg-copper/[0.06] text-copper">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-xl leading-tight text-spruce">
                      {item.label}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.84rem] leading-relaxed text-stone">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[0.74rem] font-medium text-fern">
                      Learn more
                      <ArrowUpRight
                        className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="A look around"
            title="The people and the place."
            description="A few glimpses of the team and the office you will find on 17th Avenue South."
            action={
              <Button asChild variant="outline" size="md">
                <Link href="/office/office-video-tour">
                  Take the video tour
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </Button>
            }
          />

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {officeGallery.slice(0, 5).map((photo, index) => (
              <Reveal key={photo.src} delay={index * 0.04}>
                <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-spruce/10 bg-bone">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-spruce/70 via-transparent to-transparent"
                    aria-hidden
                  />
                  <figcaption className="absolute bottom-3 left-3 right-3 text-[0.7rem] font-medium text-cream">
                    {photo.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Come see for yourself"
        title="We would love to show you around."
        description="Request an appointment online, or call our front office team with any questions about the practice."
      />
    </>
  );
}
