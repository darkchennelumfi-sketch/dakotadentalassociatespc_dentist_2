import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Stethoscope, Users } from "lucide-react";
import { doctors } from "@/content/team";
import { practice } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TeamDirectory } from "@/components/site/TeamDirectory";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the five doctors and full care team at Dakota Dental Associates in Grand Forks, ND — Drs. Paul Bothun, Heidi Stevens, Rachel Cummings, Chris Bothun and Kayla Nelson.",
  alternates: { canonical: "/office/meet-the-team" },
  openGraph: {
    title: "Meet the Team | Dakota Dental Associates",
    description:
      "Five doctors and a full team behind your care in Grand Forks, ND.",
    url: "/office/meet-the-team",
    images: [{ url: "/images/2026-home4.jpg" }],
  },
};

const principles = [
  {
    icon: Stethoscope,
    title: "Careful, current dentistry",
    text: "Continuing education is part of the rhythm here — new topics and techniques are discussed weekly in our own Learning Center.",
  },
  {
    icon: Users,
    title: "A team that knows your name",
    text: "Treatment and hygiene coordinators guide you through each step, so you always know what comes next.",
  },
  {
    icon: Sparkles,
    title: "Comfort without compromise",
    text: "High-quality care in a safe, efficient and comfortable environment is the standard we hold ourselves to.",
  },
];

export default function MeetTheTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Team"
        title={
          <>
            The people behind{" "}
            <span className="italic text-copper">your care.</span>
          </>
        }
        description="Five dentists, a full hygiene team, skilled assistants and a front office that keeps everything moving — all in one Grand Forks practice."
        image="/images/2026-home4.jpg"
        imageAlt="The Dakota Dental Associates team"
        breadcrumbs={[
          { label: "Office", href: "/office" },
          { label: "Meet the Team" },
        ]}
        badge="Five doctors"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={practice.portal} target="_blank" rel="noreferrer">
              Request an appointment
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#team-directory">Browse the team</a>
          </Button>
        </div>
      </PageHero>

      <section id="team-directory" className="anchor-offset bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="The full team"
            title="Doctors, coordinators, hygienists and assistants."
            description="Select a team member to read their bio. Every person here plays a part in making your visit feel straightforward and personal."
            align="center"
          />
          <div className="mt-12">
            <TeamDirectory />
          </div>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Meet the doctors"
            title="Five paths, one shared standard."
            description="Our doctors bring different interests and specialties to the same practice — and the same commitment to careful, personal care."
          />

          <div className="mt-14 space-y-16 sm:space-y-24">
            {doctors.map((doctor, index) => (
              <article
                key={doctor.id}
                id={doctor.id}
                className="anchor-offset grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14"
              >
                <Reveal
                  className={index % 2 === 1 ? "lg:order-2" : undefined}
                >
                  <div className="relative">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-spruce/10 bg-bone shadow-soft">
                      <Image
                        src={doctor.image}
                        alt={`${doctor.name}, ${doctor.credentials ?? "dentist"}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 34vw"
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-spruce/55 via-transparent to-transparent"
                        aria-hidden
                      />
                    </div>
                    <div className="absolute -bottom-4 left-5 rounded-2xl border border-white/70 bg-cream/95 px-4 py-2.5 shadow-lg backdrop-blur-sm">
                      <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-copper">
                        Doctor {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-0.5 text-[0.74rem] font-medium text-spruce">
                        {doctor.role}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  delay={0.08}
                  className={index % 2 === 1 ? "lg:order-1" : undefined}
                >
                  <h3 className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight text-spruce">
                    {doctor.name}
                    {doctor.credentials ? (
                      <span className="ml-2 align-middle font-sans text-[0.62rem] uppercase tracking-[0.2em] text-stone">
                        {doctor.credentials}
                      </span>
                    ) : null}
                  </h3>

                  <div className="mt-5 space-y-4 text-[0.95rem] leading-[1.8] text-ink/75">
                    {doctor.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {doctor.highlights && doctor.highlights.length > 0 ? (
                    <ul className="mt-5 grid gap-2 rounded-2xl border border-spruce/10 bg-white/50 p-5 sm:grid-cols-2">
                      {doctor.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-[0.8rem] leading-snug text-spruce"
                        >
                          <Sparkles
                            className="mt-0.5 size-3.5 shrink-0 text-copper"
                            aria-hidden
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {doctor.bioAfterList && doctor.bioAfterList.length > 0 ? (
                    <div className="mt-4 space-y-4 text-[0.95rem] leading-[1.8] text-ink/75">
                      {doctor.bioAfterList.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  <Button asChild variant="outline" size="md" className="mt-6">
                    <a href={practice.portal} target="_blank" rel="noreferrer">
                      Book with Dr. {doctor.name.split(" ")[0]}
                      <ArrowUpRight className="size-3.5" aria-hidden />
                    </a>
                  </Button>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="How we work"
            title="The same standard, every visit."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="h-full rounded-3xl border border-spruce/10 bg-white/50 p-6">
                    <span className="grid size-11 place-items-center rounded-full border border-copper/20 bg-copper/[0.06] text-copper">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-xl leading-tight text-spruce">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.84rem] leading-relaxed text-stone">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="We look forward to meeting you"
        title="Become part of the Dakota Dental family."
        description="Whether you are new to Grand Forks or have been meaning to come back, we would be glad to welcome you."
      />
    </>
  );
}
