import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Clock,
  Cpu,
  FlaskConical,
  HeartPulse,
  Layers,
  MapPin,
  Phone,
  Play,
  ScanFace,
  ShieldCheck,
  Siren,
  Smile,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { practice, stats, doctorCards, awards } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { SectionHeading, Eyebrow } from "@/components/site/SectionHeading";
import { StatCounter } from "@/components/site/StatCounter";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { CTASection } from "@/components/site/CTASection";
import { Magnetic } from "@/components/site/Magnetic";

export const metadata: Metadata = {
  title: {
    absolute: "Home | Dakota Dental Associates | Grand Forks ND",
  },
  description:
    "Dakota Dental Associates, office of Drs. Paul Bothun, Heidi Stevens, Rachel Cummings, Chris Bothun and Kayla Nelson. Located in Grand Forks, ND, we offer general and cosmetic dentistry, implants, periodontics and orthodontics.",
  alternates: { canonical: "/" },
};

const careCards = [
  {
    title: "General Treatment",
    description:
      "Regular check-ups, cleanings, fillings, crowns, root canals, implants and dentures — the steady care that keeps a smile healthy.",
    href: "/treatment/general-treatment",
    icon: Stethoscope,
    span: "lg:col-span-7",
    image: "/images/h-patient2.jpg",
    imageAlt: "Patient receiving general dental care",
    points: ["Check-ups & cleanings", "Fillings & restorations", "Implants & dentures"],
  },
  {
    title: "CEREC Same-Day Crowns",
    description:
      "A permanent ceramic restoration designed, fabricated and placed in one visit. No temporaries, no second appointment.",
    href: "/treatment/cerec",
    icon: Cpu,
    span: "lg:col-span-5",
    image: "/images/photo-cerec.jpg",
    imageAlt: "CEREC ceramic restoration",
    points: ["One visit", "No temporary crowns", "Tooth-colored porcelain"],
  },
  {
    title: "Orthodontics",
    description: "Braces for children, teens and adults — with an evaluation by age 7.",
    href: "/treatment/orthodontics",
    icon: Smile,
    span: "lg:col-span-4",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, whitening and thoughtful refinements for a more confident smile.",
    href: "/treatment/cosmetic-dentistry",
    icon: Sparkles,
    span: "lg:col-span-4",
  },
  {
    title: "Invisalign",
    description: "Clear, removable aligners that straighten teeth without wires or brackets.",
    href: "/treatment/invisalign",
    icon: Layers,
    span: "lg:col-span-4",
  },
];

const facilityFeatures = [
  { icon: FlaskConical, label: "Fully equipped in-house lab" },
  { icon: ScanFace, label: "3-D digital scanning" },
  { icon: ShieldCheck, label: "High-tech sterilization center" },
  { icon: Users, label: "Treatment & hygiene coordinators" },
];

const marqueeWords = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Implants",
  "Orthodontics",
  "Invisalign",
  "CEREC Crowns",
  "Periodontics",
  "TMJ/TMD",
  "Dental Lab",
  "Emergency Care",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div className="pointer-events-none absolute inset-0 radial-glow" aria-hidden />
        <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-10 lg:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-spruce/12 bg-white/50 px-3.5 py-1.5 text-[0.68rem] font-medium tracking-wide text-spruce backdrop-blur-sm">
                  <MapPin className="size-3.5 text-copper" aria-hidden />
                  Grand Forks, North Dakota
                  <span className="text-spruce/25">/</span>
                  <span className="text-stone">40+ years</span>
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-6 max-w-2xl text-balance text-[clamp(2.9rem,6vw,5.2rem)] leading-[0.98] text-spruce">
                  Care that feels
                  <br className="hidden sm:block" /> like{" "}
                  <span className="relative inline-block italic text-copper">
                    home.
                    <svg
                      viewBox="0 0 200 12"
                      className="absolute -bottom-1 left-0 h-2.5 w-full text-brass/70"
                      aria-hidden
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2 8C45 3 105 3 198 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-7 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-stone">
                  The team at <strong className="font-semibold text-spruce">Dakota Dental Associates</strong>{" "}
                  knows its community, and our top priority is the highest quality
                  care in a safe, efficient and comfortable environment. For more
                  than 40 years, we have cared for smiles in the heart of the Red
                  River Valley.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Magnetic>
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <a href={practice.portal} target="_blank" rel="noreferrer">
                        Request an Appointment
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    </Button>
                  </Magnetic>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="/treatment">
                      Explore our care
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <div className="flex -space-x-2.5">
                    {doctorCards.map((doctor) => (
                      <span
                        key={doctor.name}
                        className="relative size-9 overflow-hidden rounded-full border-2 border-cream shadow-sm"
                      >
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </span>
                    ))}
                  </div>
                  <p className="text-[0.78rem] leading-snug text-stone">
                    <span className="font-semibold text-spruce">Five doctors.</span>{" "}
                    One team that knows your name.
                  </p>
                  <Link
                    href="/office/meet-the-team"
                    className="inline-flex items-center gap-1 text-[0.78rem] font-medium text-fern transition-colors hover:text-spruce"
                  >
                    Meet the team
                    <ArrowUpRight className="size-3" aria-hidden />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.18} className="relative">
              <div
                className="absolute -inset-6 -z-10 rounded-[3rem] border border-brass/25"
                aria-hidden
              />
              <div
                className="absolute -right-8 top-10 -z-10 size-40 rounded-full bg-brass/15 blur-3xl"
                aria-hidden
              />

              <div className="relative rounded-[2.4rem] border border-white/70 bg-white/55 p-2 shadow-[0_30px_90px_-40px_rgba(11,43,37,0.5)] backdrop-blur-sm">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/1-9.jpg"
                    alt="The exterior of Dakota Dental Associates in Grand Forks"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spruce/55 via-spruce/5 to-transparent" aria-hidden />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div className="glass rounded-2xl px-3.5 py-2.5">
                      <p className="font-mono text-[0.54rem] uppercase tracking-[0.2em] text-copper">
                        Our office
                      </p>
                      <p className="mt-0.5 text-[0.78rem] font-medium text-spruce">
                        4000 17th Ave. S.
                      </p>
                    </div>
                    <Link
                      href="/office/office-video-tour"
                      className="grid size-10 shrink-0 place-items-center rounded-full bg-cream/90 text-spruce shadow-lg transition-transform hover:scale-105"
                      aria-label="Watch the office video tour"
                    >
                      <Play className="ml-0.5 size-4 fill-spruce" aria-hidden />
                    </Link>
                  </div>
                </div>

                <div className="pointer-events-none absolute -left-3 top-6 z-10 flex items-center gap-2 rounded-full border border-white/70 bg-cream/90 px-3.5 py-2 shadow-lg backdrop-blur-md sm:-left-6">
                  <span className="grid size-6 place-items-center rounded-full bg-copper/10 text-copper">
                    <Award className="size-3.5" aria-hidden />
                  </span>
                  <span className="text-[0.66rem] font-medium text-spruce">
                    40+ years of care
                  </span>
                </div>

                <div className="pointer-events-none absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-white/70 bg-cream/90 px-3 py-2 shadow-lg backdrop-blur-md sm:flex lg:-right-5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-fern/50" />
                    <span className="relative inline-flex size-2 rounded-full bg-fern" />
                  </span>
                  <span className="text-[0.64rem] font-medium text-spruce">
                    Accepting new patients
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-2 z-10 w-32 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:-left-5 sm:w-40">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/images/2026-home1.jpg"
                    alt="The doctors of Dakota Dental Associates"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div className="bg-cream px-2 py-1.5">
                  <p className="text-[0.55rem] font-medium uppercase tracking-[0.12em] text-stone">
                    Our doctors
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 right-4 z-10 hidden items-center gap-2 rounded-2xl border border-white/70 bg-cream/90 px-3 py-2 shadow-lg backdrop-blur-md sm:flex">
                <span className="font-display text-xl text-copper">7</span>
                <span className="text-[0.62rem] leading-tight text-stone">
                  hygiene
                  <br />
                  chairs
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="mt-16 flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.2em] text-stone/60">
            <span className="grid size-8 place-items-center rounded-full border border-spruce/10">
              <ArrowDown className="size-3.5 text-copper" aria-hidden />
            </span>
            Scroll to explore
          </Reveal>
        </div>
      </section>

      <section aria-label="Services offered" className="overflow-hidden border-y border-spruce/10 bg-spruce py-4">
        <div className="marquee-track" aria-hidden>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeWords.map((word) => (
                <span key={`${copy}-${word}`} className="flex items-center">
                  <span className="whitespace-nowrap px-6 font-display text-lg italic text-cream/75 sm:text-xl">
                    {word}
                  </span>
                  <Sparkles className="size-3 shrink-0 text-brass/70" aria-hidden />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-b border-spruce/10 bg-bone/55 py-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Welcome to Dakota Dental</Eyebrow>
              <h2 className="mt-4 max-w-md text-balance text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.05] text-spruce">
                The whole family, under one roof.
              </h2>
              <div className="mt-8 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-copper/25 text-copper">
                  <HeartPulse className="size-4" aria-hidden />
                </span>
                <p className="max-w-[230px] text-[0.78rem] leading-snug text-stone">
                  Comprehensive care, from a child&apos;s first visit to
                  life-changing restorations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 text-[1.03rem] leading-[1.8] text-ink/78">
                <p>
                  The team at{" "}
                  <strong className="font-semibold text-spruce">
                    Dakota Dental Associates
                  </strong>{" "}
                  knows its community, and wants you to know that it&apos;s our
                  top priority to provide our patients with the highest quality
                  care in a safe, efficient and comfortable environment. With more
                  than 40 years of experience in the heart of the Red River
                  Valley, we think you&apos;ve come to the right place. We want to
                  thank you for trusting your full dental care to Drs.{" "}
                  <Link href="/office/meet-the-team#Paul" className="link">
                    Paul Bothun
                  </Link>
                  ,{" "}
                  <Link href="/office/meet-the-team#Heidi" className="link">
                    Heidi Stevens
                  </Link>
                  ,{" "}
                  <Link href="/office/meet-the-team#Rachel" className="link">
                    Rachel Cummings
                  </Link>
                  ,{" "}
                  <Link href="/office/meet-the-team#Chris" className="link">
                    Chris Bothun
                  </Link>{" "}
                  and{" "}
                  <Link href="/office/meet-the-team#Kayla" className="link">
                    Kayla Nelson.
                  </Link>
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild variant="outline" size="md">
                    <Link href="/office/meet-the-team">
                      Meet the doctors
                      <ArrowUpRight className="size-3.5" aria-hidden />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="md">
                    <Link href="/new-patients">
                      New patient guide
                      <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="care" className="relative overflow-hidden bg-bone/45 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Comprehensive Dental Care"
            title="One office. Every stage of your smile."
            description="We know the value of your time, and that's where our seven-chair hygiene department can help you streamline your busy schedule. Our larger staff and state-of-the-art dental office in Grand Forks, ND, allow us to focus on a broad range of dental needs — from early dental care and basic fillings to orthodontics, dentures, root canals, surgically-guided implants and one-appointment CEREC crowns."
            action={
              <Button asChild variant="outline" size="md">
                <Link href="/treatment">
                  View all treatments
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </Button>
            }
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            {careCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal
                  key={card.title}
                  delay={index * 0.05}
                  className={card.span}
                >
                  <Link
                    href={card.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-spruce/10 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-spruce/20 hover:shadow-[0_24px_60px_-40px_rgba(11,43,37,0.5)] sm:p-7"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 radial-glow"
                      aria-hidden
                    />
                    <div className="relative flex items-start justify-between gap-4">
                      <span className="grid size-11 place-items-center rounded-full border border-copper/20 bg-copper/[0.06] text-copper">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <ArrowUpRight
                        className="size-4 text-copper/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </div>

                    <div className="relative mt-5">
                      <h3 className="font-display text-2xl leading-tight text-spruce">
                        {card.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[0.86rem] leading-relaxed text-stone">
                        {card.description}
                      </p>
                    </div>

                    {card.points ? (
                      <ul className="relative mt-5 flex flex-wrap gap-2">
                        {card.points.map((point) => (
                          <li
                            key={point}
                            className="rounded-full border border-spruce/10 bg-white/50 px-2.5 py-1 text-[0.66rem] text-stone"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {card.image ? (
                      <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/60">
                        <div className="relative aspect-[16/7]">
                          <Image
                            src={card.image}
                            alt={card.imageAlt ?? ""}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        </div>
                      </div>
                    ) : null}
                  </Link>
                </Reveal>
              );
            })}

            <Reveal delay={0.3} className="lg:col-span-12">
              <div className="relative overflow-hidden rounded-3xl bg-spruce px-6 py-6 text-cream sm:px-8">
                <div className="absolute inset-0 hero-grid-dark" aria-hidden />
                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brass/30 bg-brass/10 text-brass">
                      <Siren className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-xl">Dental emergencies don&apos;t wait.</p>
                      <p className="mt-1 max-w-xl text-[0.82rem] leading-relaxed text-cream/60">
                        We offer after-hours and weekend emergency services,
                        because emergencies don&apos;t just happen from 9 to 5.
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="light" size="md" className="shrink-0">
                    <Link href="/emergency-care">
                      Emergency care
                      <ArrowUpRight className="size-3.5" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Meet the Doctors"
            title="The people behind the practice."
            description="Five dentists who share a standard of caring, careful dentistry — and a genuine love for the Grand Forks community."
            action={
              <Button asChild variant="outline" size="md">
                <Link href="/office/meet-the-team">
                  Meet the full team
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </Button>
            }
          />

          <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {doctorCards.map((doctor) => (
              <RevealItem key={doctor.name}>
                <Link
                  href={`/office/meet-the-team#${doctor.anchor}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-spruce/10 bg-bone">
                    <Image
                      src={doctor.image}
                      alt={`${doctor.name}, ${doctor.suffix}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-spruce/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" aria-hidden />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="font-display text-lg leading-tight text-cream">
                        {doctor.name}
                        <span className="ml-1 text-[0.6rem] font-sans uppercase tracking-[0.16em] text-cream/60">
                          {doctor.suffix}
                        </span>
                      </p>
                      <p className="mt-0.5 text-[0.6rem] leading-snug text-cream/65">
                        {doctor.role}
                      </p>
                    </div>
                    <span className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-cream/20 text-cream opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                      <ArrowUpRight className="size-3.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-spruce py-20 text-cream sm:py-28">
        <div className="absolute inset-0 radial-glow-dark" aria-hidden />
        <div className="absolute inset-0 hero-grid-dark" aria-hidden />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src="/images/2026-home4.jpg"
                  alt="The Dakota Dental Associates team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spruce/70 via-transparent to-transparent" aria-hidden />
                <Link
                  href="/office/office-video-tour"
                  className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/20 bg-spruce/55 py-2 pl-2 pr-4 backdrop-blur-md transition-colors hover:bg-spruce/75"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-cream text-spruce">
                    <Play className="ml-0.5 size-3.5 fill-spruce" aria-hidden />
                  </span>
                  <span className="text-[0.72rem] font-medium text-cream">
                    Watch the office tour
                  </span>
                </Link>
              </div>
              <div className="absolute -right-4 -top-5 rounded-2xl border border-white/15 bg-spruce/80 px-4 py-3 backdrop-blur-md">
                <p className="font-display text-2xl text-brass">40+</p>
                <p className="text-[0.58rem] uppercase tracking-[0.16em] text-cream/55">
                  years of care
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow tone="dark">Expert Providers</Eyebrow>
              <h2 className="mt-4 max-w-xl text-balance text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.05] text-cream">
                Thoughtful details, designed around you.
              </h2>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-cream/65">
                Our entire facility — complete with its own fully equipped lab,
                3-D digital scanning and high-tech sterilization center — was
                designed with infection control and patient privacy in mind.
              </p>
              <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-cream/65">
                Our staff also includes full-time treatment and hygiene
                coordinators who can guide you through every step of your
                treatment. We believe the one-on-one approach is key to
                understanding your options to help you achieve a healthy, happy
                smile!
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {facilityFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.label}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3"
                    >
                      <Icon className="size-4 shrink-0 text-brass" aria-hidden />
                      <span className="text-[0.76rem] text-cream/70">{feature.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="light" size="md">
                  <Link href="/office/office-video-tour">
                    Take the office tour
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outlineLight" size="md">
                  <Link href="/technology">Our technology</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="relative order-2 lg:order-1">
              <div className="rounded-[2rem] border border-spruce/10 bg-white/55 p-2 shadow-soft">
                <BeforeAfter
                  before="/images/veneers-before-1.jpg"
                  after="/images/veneers-after-1.jpg"
                  beforeAlt="Smile before veneer treatment"
                  afterAlt="Smile after veneer treatment"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 px-1">
                <p className="text-[0.66rem] text-stone">
                  Actual patient of Drs. Paul Bothun and Heidi Stevens. Results
                  may vary.
                </p>
                <Link
                  href="/patients/before-after-photos"
                  className="inline-flex shrink-0 items-center gap-1 text-[0.7rem] font-medium text-fern hover:text-spruce"
                >
                  Full gallery
                  <ArrowUpRight className="size-3" aria-hidden />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="order-1 lg:order-2">
              <Eyebrow>Cosmetic Dentistry</Eyebrow>
              <h2 className="mt-4 max-w-lg text-balance text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.05] text-spruce">
                A smile that feels like you — only brighter.
              </h2>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-stone">
                Smile enhancement can have dramatic results on your confidence
                and self-esteem. We also offer a variety of the latest in{" "}
                <Link href="/treatment/cosmetic-dentistry" className="link">
                  cosmetic dentistry
                </Link>
                , including veneers, teeth whitening and{" "}
                <Link href="/treatment/invisalign" className="link">
                  Invisalign
                </Link>{" "}
                &ldquo;invisible braces.&rdquo; The doctors at Dakota Dental
                Associates can help you explore your cosmetic treatment options.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                {["Porcelain veneers", "Professional whitening", "Clear aligners"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-spruce/10 bg-white/45 px-3 py-2.5 text-[0.72rem] text-spruce"
                    >
                      <Sparkles className="size-3 shrink-0 text-copper" aria-hidden />
                      {item}
                    </li>
                  ),
                )}
              </ul>

              <p className="mt-6 max-w-xl text-[0.92rem] leading-relaxed text-stone">
                As a patient of Dakota Dental Associates, you can take advantage
                of our current{" "}
                <Link href="/office/specials-promotions" className="link">
                  specials and promotions
                </Link>
                . We look forward to meeting you and becoming your Grand Forks
                dentist!
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="md">
                  <Link href="/treatment/cosmetic-dentistry">
                    Explore cosmetic dentistry
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="md">
                  <Link href="/patients/before-after-photos">
                    See before &amp; after
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone/55 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Patient Voices</Eyebrow>
              <h2 className="mt-4 max-w-sm text-balance text-[clamp(2.1rem,4vw,3.3rem)] leading-[1.05] text-spruce">
                The best part of our day.
              </h2>
              <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-stone">
                Real patients, in their own words. Their comfort and confidence
                are why we do what we do.
              </p>
              <Button asChild variant="outline" size="md" className="mt-7">
                <Link href="/patients/patient-testimonials">
                  Read all testimonials
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <TestimonialsCarousel />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
            <Reveal>
              <Eyebrow>Location &amp; Hours</Eyebrow>
              <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.05] text-spruce">
                Right here in Grand Forks.
              </h2>

              <div className="mt-8 space-y-6 rounded-3xl border border-spruce/10 bg-white/55 p-6 backdrop-blur-sm">
                <div>
                  <p className="font-display text-xl text-spruce">
                    Dakota Dental Associates
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {practice.address.street}
                    <br />
                    {practice.address.city}, {practice.address.state}{" "}
                    {practice.address.zip}
                    <br />
                    <a
                      href={practice.phoneHref}
                      className="mt-2 inline-flex items-center gap-1.5 font-medium text-spruce transition-colors hover:text-copper"
                    >
                      <Phone className="size-3.5 text-copper" aria-hidden />
                      {practice.phone}
                    </a>
                  </p>
                </div>

                <div className="border-t border-spruce/10 pt-5">
                  <p className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-copper">
                    <Clock className="size-3.5" aria-hidden />
                    Office Hours
                  </p>
                  <dl className="mt-3 space-y-2 text-[0.82rem]">
                    {practice.hours.map((entry) => (
                      <div key={entry.day} className="flex items-baseline justify-between gap-4">
                        <dt className="text-stone">{entry.day}</dt>
                        <dd className="text-right font-medium text-spruce">{entry.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-spruce/10 pt-5">
                  <Button asChild size="sm">
                    <a href={practice.portal} target="_blank" rel="noreferrer">
                      Request appointment
                      <ArrowUpRight className="size-3" aria-hidden />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/office/map-directions">
                      <MapPin className="size-3.5" aria-hidden />
                      Map &amp; directions
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/office/office-video-tour">
                      <Play className="size-3.5" aria-hidden />
                      Office tour
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-spruce/10 bg-bone">
                <iframe
                  title="Map to Dakota Dental Associates"
                  src={practice.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full grayscale-[35%]"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 rounded-2xl border border-white/70 bg-cream/90 p-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.7rem] font-semibold text-spruce">
                    On 17th Avenue South
                  </p>
                  <p className="mt-0.5 text-[0.68rem] text-stone">
                    4000 17th Ave. S. · Grand Forks, ND 58201
                  </p>
                </div>
                <a
                  href={practice.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[0.7rem] font-medium text-fern hover:text-spruce"
                >
                  Get directions
                  <ArrowUpRight className="size-3" aria-hidden />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-spruce/10 bg-bone/45 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-2 text-center">
              <Eyebrow className="justify-center">Recognition</Eyebrow>
              <h2 className="text-balance text-[clamp(1.8rem,3.4vw,2.8rem)] leading-tight text-spruce">
                Awards for Dakota Dental Associates
              </h2>
              <p className="mx-auto max-w-xl text-[0.88rem] text-stone">
                Thank you to our patients and community for these honors.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="marquee-track gap-4">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-4">
                {awards.map((award) => (
                  <div
                    key={`${copy}-${award.src}`}
                    className="group flex h-24 w-40 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-spruce/10 bg-cream/80 p-3 grayscale transition-all duration-300 hover:grayscale-0"
                  >
                    <Image
                      src={award.src}
                      alt={award.alt}
                      width={award.width}
                      height={award.height}
                      className="max-h-full w-auto object-contain opacity-75 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="We look forward to meeting you"
        title="Become part of the Dakota Dental family."
        description="Whether it has been six months or six years, we would be glad to welcome you back. Request an appointment online or give our Grand Forks office a call."
      />
    </>
  );
}
