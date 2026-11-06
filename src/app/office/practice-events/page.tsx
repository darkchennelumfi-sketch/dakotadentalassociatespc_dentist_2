import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CalendarHeart,
  Gift,
  HeartHandshake,
  PartyPopper,
  PencilRuler,
  Presentation,
} from "lucide-react";
import { practice } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { EventGallery } from "@/components/site/EventGallery";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Practice Events",
  description:
    "Community, contests and lectures from Dakota Dental Associates in Grand Forks — including National Children's Dental Health Month and presentations at the UND School of Medicine.",
  alternates: { canonical: "/office/practice-events" },
  openGraph: {
    title: "Practice Events | Dakota Dental Associates",
    description: "We like to have fun at Dakota Dental Associates — and the more, the merrier.",
    url: "/office/practice-events",
    images: [{ url: "/images/842391-1000-800.jpg" }],
  },
};

const contestIds = [
  "801999",
  "801997",
  "801995",
  "802001",
  "802003",
  "802005",
  "802007",
  "802009",
  "842391",
  "842393",
  "842395",
  "842397",
  "842399",
  "842401",
];

const lectureIds = ["802044", "802046", "802048", "802050", "802052"];

const contestPhotos = contestIds.map((id, index) => ({
  src: `/images/${id}-1000-800.jpg`,
  alt: `Children's Dental Health Month poster contest photo ${index + 1}`,
}));

const lecturePhotos = lectureIds.map((id, index) => ({
  src: `/images/${id}-1000-800.jpg`,
  alt: `Dakota Dental lecture series photo ${index + 1}`,
}));

const moments = [
  {
    icon: PencilRuler,
    title: "Poster contest",
    text: "In honor of National Children's Dental Health Month, we held a poster contest for children ages 6 to 12. Posters reflected healthy dental habits, and winners were celebrated in our album. Each February, kids can get their pencils, paints and markers out, enter the contest and win a gift card to River Cinema. Stop by or see our specials page for rules.",
  },
  {
    icon: Presentation,
    title: "Lectures at UND",
    text: "Dr. Paul Bothun was invited to give another lecture to second-year medical students at the UND School of Medicine earlier this fall, speaking on dental pathologies and conditions common to medicine and dentistry. He also presented Feb. 27 at the UND School of Medicine and Health Sciences on the commonalities between the two fields and developing healthcare partnerships. Students: log in to view an edited version of his presentation, and consult your professor for the username and password.",
  },
  {
    icon: Gift,
    title: "Holiday giving",
    text: "Employees raised almost $500 this year to shop for necessities and holiday gifts for a local family — that is a lot of wrap, tape and ear-to-ear smiles. Santa was in the house on Dec. 15, too: young ones slurped warm cocoa, munched on cookies and chatted up Santa. Ho! Ho! Ho!",
  },
  {
    icon: HeartHandshake,
    title: "Community spirit",
    text: "From Give Kids a Smile to Head Start and the Third Street Clinic, our team shows up for Grand Forks throughout the year.",
  },
];

export default function PracticeEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Events"
        title={
          <>
            Good care. Good company.{" "}
            <span className="italic text-copper">Good fun.</span>
          </>
        }
        description="We like to have fun at Dakota Dental Associates — and the more, the merrier. Join us for contests, community projects and our lecture series."
        image="/images/842391-1000-800.jpg"
        imageAlt="A Dakota Dental Associates community event"
        breadcrumbs={[
          { label: "Office", href: "/office" },
          { label: "Practice Events" },
        ]}
        badge="Community & learning"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="outline" size="lg">
            <Link href="/office/specials-promotions">
              Specials &amp; promotions
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg">
            <a href={practice.facebook} target="_blank" rel="noreferrer">
              Follow us on Facebook
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Around the practice"
            title="A team that shows up for its community."
            description="Our events are a chance to celebrate healthy habits, share what we know, and take care of the neighbors who take care of us."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {moments.map((moment, index) => {
              const Icon = moment.icon;
              return (
                <Reveal key={moment.title} delay={index * 0.05}>
                  <div className="flex h-full items-start gap-4 rounded-3xl border border-spruce/10 bg-white/50 p-6">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-copper/20 bg-copper/[0.06] text-copper">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-tight text-spruce">
                        {moment.title}
                      </h3>
                      <p className="mt-2 text-[0.85rem] leading-relaxed text-stone">
                        {moment.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-copper/25 bg-cream text-copper">
              <PartyPopper className="size-4" aria-hidden />
            </span>
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-copper">
                Album one
              </p>
              <h2 className="font-display text-2xl text-spruce">
                Our Contests and Fun Events
              </h2>
            </div>
          </div>
          <div className="mt-8">
            <EventGallery photos={contestPhotos} label="Contests and fun events" />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-copper/25 bg-bone text-copper">
              <Presentation className="size-4" aria-hidden />
            </span>
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-copper">
                Album two
              </p>
              <h2 className="font-display text-2xl text-spruce">
                Our Lecture Series
              </h2>
            </div>
          </div>
          <div className="mt-8">
            <EventGallery photos={lecturePhotos} label="Lecture series" />
          </div>

          <Reveal className="mt-10">
            <div className="rounded-3xl border border-spruce/10 bg-white/50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-fern/10 text-fern">
                  <BookOpen className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-xl text-spruce">
                    A partnership between medicine and dentistry
                  </p>
                  <p className="mt-2 max-w-3xl text-[0.86rem] leading-relaxed text-stone">
                    Dr. Paul Bothun&apos;s presentations at the UND School of
                    Medicine and Health Sciences explore the commonalities between
                    the two fields and take a close look at developing healthcare
                    partnerships. He also participates in the high school job
                    shadowing program and has given lectures to students at the UND
                    School of Medicine.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link href="/office/meet-the-team#Paul" className="link text-[0.8rem]">
                      Read Dr. Bothun&apos;s bio
                    </Link>
                    <Link href="/office/practice-events" className="link text-[0.8rem]">
                      Back to gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 rounded-3xl bg-spruce px-6 py-7 text-cream sm:flex-row sm:items-center sm:justify-between sm:px-9">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brass/30 bg-brass/10 text-brass">
                <CalendarHeart className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-display text-xl">Want to join us next time?</p>
                <p className="mt-1 max-w-2xl text-[0.84rem] leading-relaxed text-cream/60">
                  Follow our Facebook page for event announcements, photos and
                  community news from the practice.
                </p>
              </div>
            </div>
            <Button asChild variant="light" size="md" className="shrink-0">
              <a href={practice.facebook} target="_blank" rel="noreferrer">
                Facebook
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Come be part of it"
        title="We would love to meet you."
        description="Request an appointment or stop by our Grand Forks office. There is always room for another familiar face."
      />
    </>
  );
}
