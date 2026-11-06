import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkle,
} from "lucide-react";
import { practice, quickLinks } from "@/content/site";
import { Wordmark } from "./Logo";

const explore = [
  { label: "Home", href: "/" },
  { label: "Office", href: "/office" },
  { label: "Patients", href: "/patients" },
  { label: "Treatment", href: "/treatment" },
  { label: "Technology", href: "/technology" },
  { label: "Contact Us", href: "/contact-us" },
];

const patientLinks = [
  { label: "New Patients", href: "/new-patients" },
  { label: "Your First Visit", href: "/patients/your-first-visit" },
  { label: "Financial & Insurance", href: "/office/financial-insurance" },
  { label: "Patient Testimonials", href: "/patients/patient-testimonials" },
  { label: "FAQ", href: "/patients/faq" },
  { label: "Emergency Care", href: "/emergency-care" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-spruce text-cream">
      <div className="absolute inset-0 radial-glow-dark" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1.1fr]">
          <div>
            <Wordmark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              Exceptional dentistry in the heart of the Red River Valley. Five
              doctors, one in-house lab, and more than 40 years of caring for
              Grand Forks.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <a
                href={practice.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 px-3.5 py-2 text-[0.72rem] text-cream/70 transition-colors hover:border-brass/50 hover:text-cream"
              >
                Facebook
                <ArrowUpRight className="size-3" aria-hidden />
              </a>
              <a
                href={practice.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 px-3.5 py-2 text-[0.72rem] text-cream/70 transition-colors hover:border-brass/50 hover:text-cream"
              >
                Google
                <ArrowUpRight className="size-3" aria-hidden />
              </a>
              <a
                href={practice.yelp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 px-3.5 py-2 text-[0.72rem] text-cream/70 transition-colors hover:border-brass/50 hover:text-cream"
              >
                Yelp
                <ArrowUpRight className="size-3" aria-hidden />
              </a>
            </div>
          </div>

          <nav aria-label="Explore">
            <h2 className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-brass">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Patient resources">
            <h2 className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-brass">
              Patient Resources
            </h2>
            <ul className="mt-5 space-y-3">
              {patientLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-brass">
              Visit
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brass/80" aria-hidden />
                <span>
                  {practice.address.street}
                  <br />
                  {practice.address.city}, {practice.address.state}{" "}
                  {practice.address.zip}
                </span>
              </li>
              <li>
                <a
                  href={practice.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-cream"
                >
                  <Phone className="size-4 shrink-0 text-brass/80" aria-hidden />
                  {practice.phone}
                </a>
              </li>
              <li>
                <a
                  href={practice.emailHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-cream"
                >
                  <Mail className="size-4 shrink-0 text-brass/80" aria-hidden />
                  {practice.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-brass/80" aria-hidden />
                <span>
                  Mon–Wed 7:10–5
                  <br />
                  Thu 7:10–12 & 1–5
                  <br />
                  Fri 8–12
                </span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={practice.portal}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-brass transition-colors hover:text-cream"
              >
                Request appointment
                <ArrowUpRight className="size-3" aria-hidden />
              </a>
              <a
                href={practice.payOnline}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.78rem] text-cream/60 transition-colors hover:text-cream"
              >
                Pay online
                <ArrowUpRight className="size-3" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[0.75rem] text-cream/55 sm:grid-cols-3">
          {quickLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 transition-colors hover:text-cream"
            >
              <Sparkle className="size-3 text-brass" aria-hidden />
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.7rem] text-cream/45 lg:flex-row lg:items-center lg:justify-between">
          <p>
            <ShieldCheck
              className="mr-1.5 inline size-3.5 -translate-y-px align-middle text-brass/70"
              aria-hidden
            />
            2024 © All Rights Reserved | Website Design By:{" "}
            <a
              href="https://www.televox.com/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-cream/25 underline-offset-2 hover:text-cream"
            >
              Televox®
            </a>{" "}
            |{" "}
            <a
              href="https://televox.milestoneinternet.com/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cream"
            >
              Administration
            </a>
          </p>
          <p className="shrink-0">
            {practice.addressLine} · {practice.phone}
          </p>
        </div>
      </div>
    </footer>
  );
}
