import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { GlossarySearch } from "@/components/site/GlossarySearch";
import { CTASection } from "@/components/site/CTASection";
import { Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Dental Glossary",
  description:
    "A plain-language dental glossary from Dakota Dental Associates in Grand Forks. Search or browse terms from abscess and amalgam to TMJ, veneers and tooth whitening.",
  alternates: { canonical: "/miscellaneous/glossary" },
  openGraph: {
    title: "Dental Glossary | Dakota Dental Associates",
    description: "Plain-language definitions for the dental terms you may hear.",
    url: "/miscellaneous/glossary",
  },
};

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental Glossary"
        title={
          <>
            The words behind{" "}
            <span className="italic text-copper">your care.</span>
          </>
        }
        description="Our dental glossary can help you better understand certain terms regarding general dental treatment. If you have any further questions, call us today."
        breadcrumbs={[
          { label: "Resources", href: "/miscellaneous" },
          { label: "Glossary" },
        ]}
        badge="46 terms"
      />

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Search or browse</Eyebrow>
                <h2 className="mt-3 text-balance text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.08] text-spruce">
                  Find a term in seconds.
                </h2>
              </div>
              <Link
                href="/miscellaneous/related-links"
                className="inline-flex shrink-0 items-center gap-1 text-[0.78rem] font-medium text-fern hover:text-spruce"
              >
                Related links
                <ArrowUpRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          </Reveal>

          <div className="mt-8">
            <GlossarySearch />
          </div>

          <Reveal className="mt-10">
            <div className="flex items-start gap-3 rounded-2xl border border-spruce/10 bg-white/50 p-5">
              <BookOpen className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden />
              <p className="text-[0.8rem] leading-relaxed text-stone">
                This glossary is for general education only and is not a substitute
                for a diagnosis. If something about your teeth or gums is worrying
                you, please{" "}
                <Link href="/contact-us" className="link">
                  contact our office
                </Link>{" "}
                so we can take a look.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Plain language, always"
        title="If we use a word you do not know, stop us."
        description="Good care includes understanding your options. Ask us anything — we would rather explain it twice than have you leave with a question."
      />
    </>
  );
}
