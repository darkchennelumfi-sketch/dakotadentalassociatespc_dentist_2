import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Cpu,
  Droplets,
  FlaskConical,
  ScanFace,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Sun,
  Thermometer,
} from "lucide-react";
import { practice } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Technology",
  description:
    "Explore the technology at Dakota Dental Associates in Grand Forks: CEREC same-day crowns, 3-D digital scanning, Galileos digital X-ray, VELscope oral cancer screening, DentaPure water filtration, an in-house lab and geothermal heat.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Our Technology | Dakota Dental Associates",
    description:
      "Precise, efficient, comfortable dentistry — supported by the right tools.",
    url: "/technology",
    images: [{ url: "/images/photo-cerec.jpg" }],
  },
};

const technologies = [
  {
    icon: Cpu,
    title: "CEREC same-day restorations",
    text: "A permanent ceramic restoration can be designed, fabricated and placed in a single visit. No temporaries, no second appointment.",
    href: "/treatment/cerec",
  },
  {
    icon: ScanFace,
    title: "3-D digital scanning",
    text: "Digital impressions capture the shape of your teeth precisely and comfortably — without the mess of traditional impression trays.",
  },
  {
    icon: ScanLine,
    title: "Galileos digital X-ray",
    text: "Galileos is digital X-ray technology that assists with CEREC restorations, giving the clinical team a clear view for planning.",
  },
  {
    icon: Sparkles,
    title: "VELscope oral screening",
    text: "The VELscope is a tool used to discover oral abnormalities, which is very beneficial in the fight against oral cancer.",
  },
  {
    icon: Droplets,
    title: "DentaPure water filtration",
    text: "Our water sterilization and filtration system uses technology designed for NASA to cleanse and purify water of harmful bacteria, viruses and other organisms.",
  },
  {
    icon: ShieldCheck,
    title: "High-tech sterilization",
    text: "Our sterilization center was designed with infection control and patient privacy in mind, and every instrument follows a rigorous process.",
  },
  {
    icon: FlaskConical,
    title: "Fully equipped in-house lab",
    text: "Having our own lab means precise appliances and efficient turnaround — with the clinical team close to the work at every stage.",
  },
  {
    icon: Thermometer,
    title: "Geothermal heat",
    text: "An environmentally friendly heating and cooling system is part of how we keep operating costs — and our environmental footprint — lower.",
  },
  {
    icon: Sun,
    title: "Digital low-dose X-rays",
    text: "Digital imaging helps us see more while using less radiation, and keeps your records easy to share and review.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Technology"
        title={
          <>
            Better tools.{" "}
            <span className="italic text-copper">Better visits.</span>
          </>
        }
        description="Technology only matters if it makes care more precise, more efficient or more comfortable. These are the tools we use every day for exactly that."
        image="/images/photo-cerec.jpg"
        imageAlt="CEREC same-day ceramic restoration technology"
        breadcrumbs={[{ label: "Technology" }]}
        variant="dark"
        badge="Precision & comfort"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="light" size="lg">
            <a href={practice.portal} target="_blank" rel="noreferrer">
              Request an appointment
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="lg">
            <Link href="/treatment/cerec">Explore CEREC</Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Built for precision"
            title="Technology that earns its place."
            description="Our entire facility — complete with its own fully equipped lab, 3-D digital scanning and high-tech sterilization center — was designed with infection control and patient privacy in mind."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="grid size-11 place-items-center rounded-full border border-copper/20 bg-copper/[0.06] text-copper">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h2 className="mt-5 font-display text-xl leading-tight text-spruce">
                    {item.title}
                  </h2>
                  <p className="mt-2 flex-1 text-[0.84rem] leading-relaxed text-stone">
                    {item.text}
                  </p>
                  {item.href ? (
                    <span className="mt-4 inline-flex items-center gap-1 text-[0.74rem] font-medium text-fern">
                      Learn more
                      <ArrowUpRight className="size-3.5" aria-hidden />
                    </span>
                  ) : null}
                </>
              );

              return (
                <Reveal key={item.title} delay={index * 0.035}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="group flex h-full flex-col rounded-3xl border border-spruce/10 bg-white/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-spruce/20 hover:bg-cream"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex h-full flex-col rounded-3xl border border-spruce/10 bg-white/50 p-6">
                      {content}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-spruce/10 bg-bone/45 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-spruce/10">
                <Image
                  src="/images/799000-1000-800.jpg"
                  alt="Inside the Dakota Dental Associates lab"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-spruce/35 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeading
                eyebrow="In-house lab"
                title="The work stays close to the care."
                description="A fully equipped lab under the same roof means appliances and restorations move efficiently between the clinical team and the technicians — with fewer handoffs and more control over the result."
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="md">
                  <Link href="/treatment/dental-lab">
                    Explore the dental lab
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="md">
                  <Link href="/office/office-video-tour">
                    Take the office tour
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-spruce/10 bg-white/60 p-4">
                <Image
                  src="/images/sterilization.png"
                  alt="DentaPure water sterilization and filtration system"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-contain p-8"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:order-1">
              <SectionHeading
                eyebrow="Safety & water quality"
                title="Clean water is part of clean care."
                description="We use the DentaPure water sterilization and filtration system. Its cartridges contain iodinated resin which releases atomic isotopes as water passes through, sterilizing and cleaning the water nearly instantaneously."
              />
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Technology designed for NASA",
                  "Efficient and environmentally friendly",
                  "Cleared by the FDA and EPA",
                  "Meets or exceeds OSAP, CDC and ADA standards",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-spruce/10 bg-white/50 px-3 py-2.5 text-[0.78rem] leading-snug text-spruce"
                  >
                    <ShieldCheck
                      className="mt-0.5 size-3.5 shrink-0 text-fern"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" size="md" className="mt-6">
                <Link href="/patients/sterilization-water-filtration">
                  Sterilization &amp; water filtration
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="See it in person"
        title="The best way to understand the technology is to visit."
        description="Request an appointment and we will happily show you how the tools work and why we chose them."
      />
    </>
  );
}
