import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpen,
  CircleDollarSign,
  Cpu,
  HeartPulse,
  ScanLine,
  Smile,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const metadata: Metadata = {
  title: "Related Links",
  description:
    "Trusted dental resources recommended by Dakota Dental Associates — the American Dental Association, MouthHealthy, CEREC, Galileos, Invisalign, VELscope and CareCredit.",
  alternates: { canonical: "/miscellaneous/related-links" },
  openGraph: {
    title: "Related Links | Dakota Dental Associates",
    description: "Helpful resources for learning more about dental health.",
    url: "/miscellaneous/related-links",
    images: [{ url: "/images/h-smile1.jpg" }],
  },
};

const links = [
  {
    name: "American Dental Association",
    href: "https://www.ada.org",
    description:
      "The ADA is the largest professional organization of dental professionals and a great source of information on dental and oral health topics.",
    icon: BookOpen,
  },
  {
    name: "CEREC",
    href: "https://www.cerec.com",
    description:
      "CEREC takes digital impressions to the highest level of precision and efficiency, resulting in the design, fabrication and placement of ceramic restorations in just one visit.",
    icon: Cpu,
  },
  {
    name: "Galileos",
    href: "https://www.dentsplysirona.com",
    description:
      "Galileos is digital X-ray technology that assists with CEREC restorations.",
    icon: ScanLine,
  },
  {
    name: "Invisalign®",
    href: "https://www.invisalign.com",
    description:
      "Invisalign is the clear way to straighten teeth without braces, using aligners. Learn more about the market's leading clear aligner.",
    icon: Smile,
  },
  {
    name: "MouthHealthy",
    href: "https://www.mouthhealthy.org",
    description:
      "MouthHealthy is a website brought to you by the ADA. It has helpful tips and information on dental health.",
    icon: HeartPulse,
  },
  {
    name: "VELscope",
    href: "https://www.velscope.com",
    description:
      "The VELscope is a tool used to discover oral abnormalities, which is very beneficial in the fight against oral cancer.",
    icon: Sparkles,
  },
  {
    name: "CareCredit®",
    href: "https://www.carecredit.com",
    description:
      "CareCredit®, a GE Money Company, offers healthcare patient payment plans for treatments and procedures your insurance doesn't cover. The plan is easy to use and, in most cases, allows six-month or 12-month interest-free credit. For Invisalign, interest-free credit for 18 months may also be available. Please ask us for details or a brochure.",
    icon: CircleDollarSign,
  },
];

export default function RelatedLinksPage() {
  return (
    <>
      <PageHero
        eyebrow="Related Links"
        title={
          <>
            A few trusted places to{" "}
            <span className="italic text-copper">keep learning.</span>
          </>
        }
        description="Organizations and resources we recommend when you want to read more about dental health, treatment technology and paying for care."
        image="/images/h-smile1.jpg"
        imageAlt="A healthy smile"
        breadcrumbs={[
          { label: "Resources", href: "/miscellaneous" },
          { label: "Related Links" },
        ]}
        badge="External resources"
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Good places to look"
            title="Helpful, independent information."
            description="These links open in a new tab. They are provided for general education and are not a substitute for care from a dentist who knows you."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <Reveal key={link.name} delay={index * 0.04}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full items-start gap-4 rounded-3xl border border-spruce/10 bg-white/50 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-spruce/20 hover:bg-cream"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-copper/20 bg-copper/[0.06] text-copper">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-3">
                        <span className="font-display text-xl leading-tight text-spruce">
                          {link.name}
                        </span>
                        <ArrowUpRight
                          className="mt-0.5 size-4 shrink-0 text-copper/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                      <span className="mt-2 block text-[0.84rem] leading-relaxed text-stone">
                        {link.description}
                      </span>
                      <span className="mt-3 block text-[0.68rem] uppercase tracking-[0.14em] text-stone/70">
                        {new URL(link.href).hostname.replace("www.", "")}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="A note on outside links"
        title="We are still your best first call."
        description="If something you read raises a question about your own teeth, bring it to your next visit or call us. We are glad to put it in context."
      />
    </>
  );
}
