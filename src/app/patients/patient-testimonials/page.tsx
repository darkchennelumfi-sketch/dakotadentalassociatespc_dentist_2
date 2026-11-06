import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { practice } from "@/content/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description:
    "Read what real patients say about Dakota Dental Associates in Grand Forks — Invisalign, comfortable care, restorative work, a child's first visit and more.",
  alternates: { canonical: "/patients/patient-testimonials" },
  openGraph: {
    title: "Patient Testimonials | Dakota Dental Associates",
    description: "Real patients, in their own words.",
    url: "/patients/patient-testimonials",
    images: [{ url: "/images/2026-home4.jpg" }],
  },
};

const testimonials = [
  {
    name: "Skylar",
    topic: "Invisalign Teen",
    quote:
      "Having Invisalign Teen made me realize that I could finally be comfortable with my smile and not have to worry about what my smile looked like or what other people thought. Thanks to Invisalign, my teeth are INVISIFINE!",
  },
  {
    name: "Alicia",
    topic: "Comfortable care",
    quote:
      "Dr. Bothun gives the best Novocain shots, and they were the best I have ever had. They didn't hurt a bit. He always makes you feel like you're at home and makes you feel comfortable by making great conversation and by making jokes. I got my teeth done really fast, and he gave me the exact amount of novocaine I needed to make sure it didn't hurt. He was done in a great amount of time, all the while being extremely accurate. I would never ever change my dentist because when I go to Dakota Dental I know they will make sure I'm taken care of in a great way!",
  },
  {
    name: "Michael",
    topic: "Dr. Stevens",
    quote:
      "I just wanted to say thank-you to Dr. Stevens and her staff for doing an excellent job. My visit was very enjoyable, and I look forward to future visits. Very professional! Thank you, Dr. Stevens.",
  },
  {
    name: "Matt",
    topic: "A hometown favorite",
    quote: "Best dentist in Grand Forks!",
  },
  {
    name: "JoAnne",
    topic: "Restorative care",
    quote:
      "Dear Dr. Bothun and staff: Hello! I wanted to thank you so much for redoing my bridge. You and Nicole did a super job! You and your staff are so kind and professional. Everyone is very friendly. I enjoy going there.",
  },
  {
    name: "Jessica",
    topic: "A child's first visit",
    quote:
      "Thank you to Sheila and Dr. Bothun for making my 3 year old son's first dental appointment so great! He keeps talking about how nice the dentist is. I could not have asked for a better experience!",
  },
];

export default function PatientTestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Voices"
        title={
          <>
            Real patients had this to say{" "}
            <span className="italic text-copper">about us.</span>
          </>
        }
        description="Their comfort and confidence are why we do what we do. These are real notes and comments from people we have had the privilege to care for."
        image="/images/2026-home4.jpg"
        imageAlt="The Dakota Dental Associates team"
        breadcrumbs={[
          { label: "Patients", href: "/patients" },
          { label: "Patient Testimonials" },
        ]}
        badge="In their own words"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={practice.portal} target="_blank" rel="noreferrer">
              Become a patient
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/office/meet-the-team">Meet the team</Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="In their own words"
            title="The best part of our day."
            description="Six notes from patients who took the time to tell us how their visit felt."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.04}>
                <figure className="flex h-full flex-col rounded-3xl border border-spruce/10 bg-white/50 p-6 transition-colors hover:border-spruce/20">
                  <div className="flex items-center justify-between">
                    <Quote className="size-7 text-brass/70" aria-hidden />
                    <div className="flex gap-0.5 text-copper" aria-label="Five stars">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="size-3 fill-current"
                          aria-hidden
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-4 flex-1 text-pretty text-[0.92rem] leading-[1.75] text-ink/80">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-spruce/10 pt-4">
                    <p className="font-display text-lg leading-tight text-spruce">
                      {testimonial.name}
                    </p>
                    <p className="mt-0.5 text-[0.7rem] uppercase tracking-[0.14em] text-stone">
                      {testimonial.topic}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-spruce/10 bg-bone/45 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 rounded-3xl bg-spruce px-6 py-8 text-cream sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-brass">
                Share your experience
              </p>
              <p className="mt-2 max-w-xl font-display text-2xl leading-snug">
                Have a story about your visit?
              </p>
              <p className="mt-2 max-w-xl text-[0.84rem] leading-relaxed text-cream/60">
                We would love to hear it. Send us a note, or leave a review on
                Google or Yelp — it helps other families find us.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="light" size="md">
                <Link href="/contact-us">
                  Send a note
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="md">
                <a href={practice.yelp} target="_blank" rel="noreferrer">
                  Yelp
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="We look forward to meeting you"
        title="Your story could be next."
        description="Request an appointment online or call our Grand Forks office. We would be glad to welcome you."
      />
    </>
  );
}
