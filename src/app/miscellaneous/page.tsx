import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Link2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Helpful dental resources from Dakota Dental Associates in Grand Forks: a plain-language dental glossary and trusted links for further reading.",
  alternates: { canonical: "/miscellaneous" },
};

const resources = [
  {
    href: "/miscellaneous/glossary",
    label: "Dental Glossary",
    description:
      "A plain-language guide to the dental terms you may hear during treatment — from abscess and amalgam to veneers.",
    icon: BookOpen,
  },
  {
    href: "/miscellaneous/related-links",
    label: "Related Links",
    description:
      "Trusted organizations and resources for learning more about dental health, CEREC, Invisalign, oral cancer screening and financing.",
    icon: Link2,
  },
];

export default function MiscellaneousPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            A little more{" "}
            <span className="italic text-copper">context.</span>
          </>
        }
        description="Thank you for visiting our website. We hope you find it helpful and informative. Please feel free to contact us with any questions or comments."
        breadcrumbs={[{ label: "Resources" }]}
        badge="Helpful information"
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Reveal key={resource.href} delay={index * 0.06}>
                  <Link
                    href={resource.href}
                    className="group flex h-full flex-col rounded-3xl border border-spruce/10 bg-white/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-spruce/20 hover:bg-cream hover:shadow-[0_24px_60px_-40px_rgba(11,43,37,0.5)]"
                  >
                    <span className="grid size-12 place-items-center rounded-full border border-copper/20 bg-copper/[0.06] text-copper">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h2 className="mt-6 font-display text-2xl text-spruce">
                      {resource.label}
                    </h2>
                    <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-stone">
                      {resource.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-[0.78rem] font-medium text-fern">
                      Browse {resource.label.toLowerCase()}
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

      <CTASection
        eyebrow="Still curious?"
        title="We are happy to explain anything."
        description="If a term or treatment is not clear, ask us. Our team would rather answer the question than have you wonder."
      />
    </>
  );
}
