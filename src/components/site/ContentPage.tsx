import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { type ContentPageData } from "@/content/pages";
import { PageHero } from "./PageHero";
import { ProseContent } from "./ProseContent";
import { SidebarNav } from "./SidebarNav";
import { CTASection } from "./CTASection";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./SectionHeading";

const sectionMeta = {
  office: { label: "Office", href: "/office", eyebrow: "The Office" },
  patients: { label: "Patients", href: "/patients", eyebrow: "Patient Guide" },
  treatment: { label: "Treatment", href: "/treatment", eyebrow: "Treatments" },
} as const;

export function ContentPage({ page }: { page: ContentPageData }) {
  const meta = sectionMeta[page.section];
  const related = page.siblings
    .filter((item) => item.href !== page.route)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title={page.title}
        description={page.description}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        imageFit={
          page.heroImage?.includes("sterilization") ||
          page.heroImage?.includes("invisalign")
            ? "contain"
            : "cover"
        }
        breadcrumbs={[
          { label: meta.label, href: meta.href },
          { label: page.title },
        ]}
        variant={page.section === "treatment" ? "dark" : "light"}
        badge="Dakota Dental Associates"
      />

      <section className="relative bg-cream py-14 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-16">
            <Reveal>
              <article className="max-w-3xl">
                {page.lead ? (
                  <p className="mb-8 text-[1.16rem] leading-[1.75] text-ink/85">
                    {page.lead}
                  </p>
                ) : null}
                <ProseContent blocks={page.blocks} />

                <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-spruce/10 bg-white/50 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-copper/10 text-copper">
                      <Sparkles className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-lg text-spruce">
                        Have a question about this page?
                      </p>
                      <p className="mt-0.5 text-[0.8rem] text-stone">
                        Our team is happy to walk you through it.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/contact-us"
                    className="inline-flex shrink-0 items-center gap-1.5 text-[0.8rem] font-medium text-fern transition-colors hover:text-spruce"
                  >
                    Contact us
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <SidebarNav
                title={meta.eyebrow}
                current={page.route}
                items={page.siblings}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-spruce/10 bg-bone/60 py-16">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
            <Eyebrow>Continue exploring</Eyebrow>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-spruce/10 bg-cream/80 px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-spruce/20 hover:bg-cream"
                >
                  <span className="font-display text-lg text-spruce">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-copper transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection />
    </>
  );
}
