import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Cpu,
  FlaskConical,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { practice, officeGallery } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { EventGallery } from "@/components/site/EventGallery";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Office Video Tour",
  description:
    "Take a video tour of Dakota Dental Associates in Grand Forks, ND. See the office, the in-house lab, digital scanning and sterilization center before your first visit.",
  alternates: { canonical: "/office/office-video-tour" },
  openGraph: {
    title: "Office Video Tour | Dakota Dental Associates",
    description: "Step inside our Grand Forks office before your first visit.",
    url: "/office/office-video-tour",
    images: [{ url: "/images/2026-home4.jpg" }],
  },
};

const features = [
  { icon: FlaskConical, label: "Fully equipped in-house lab" },
  { icon: ScanFace, label: "3-D digital scanning" },
  { icon: ShieldCheck, label: "High-tech sterilization center" },
  { icon: Users, label: "Treatment & hygiene coordinators" },
  { icon: Cpu, label: "CEREC same-day restorations" },
  { icon: Sparkles, label: "Designed for privacy and comfort" },
];

const photos = officeGallery.map((photo) => ({
  src: photo.src,
  alt: photo.title,
}));

export default function OfficeVideoTourPage() {
  return (
    <>
      <PageHero
        eyebrow="Office Video Tour"
        title={
          <>
            Step inside before{" "}
            <span className="italic text-copper">you visit.</span>
          </>
        }
        description="A short look around Dakota Dental Associates — the space, the technology and the team that will take care of you."
        image="/images/2026-home1.jpg"
        imageAlt="The doctors of Dakota Dental Associates"
        breadcrumbs={[
          { label: "Office", href: "/office" },
          { label: "Office Video Tour" },
        ]}
        badge="Take a look"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={practice.portal} target="_blank" rel="noreferrer">
              Request an appointment
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/office/map-directions">Map &amp; directions</Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-spruce/10 bg-spruce p-2 shadow-[0_30px_90px_-40px_rgba(11,43,37,0.6)] sm:p-3">
              <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-spruce">
                <iframe
                  src="https://www.youtube.com/embed/MBmgQwjWVzQ?rel=0"
                  title="Dakota Dental Associates office video tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 size-full"
                />
              </div>
            </div>
            <p className="mt-4 text-center text-[0.72rem] text-stone">
              A video tour of Dakota Dental Associates in Grand Forks, ND.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.label} delay={index * 0.04}>
                  <div className="flex items-center gap-3 rounded-2xl border border-spruce/10 bg-white/50 px-4 py-3.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-copper/[0.08] text-copper">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="text-[0.82rem] text-spruce">{feature.label}</span>
                  </div>
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
            description="A few stills from around the office. Select any photo to see it larger."
          />
          <div className="mt-10">
            <EventGallery photos={photos} label="Office gallery" />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready when you are"
        title="The best tour is the real thing."
        description="Request an appointment and we will welcome you in person. Our front office team is happy to answer questions before you book."
      />
    </>
  );
}
