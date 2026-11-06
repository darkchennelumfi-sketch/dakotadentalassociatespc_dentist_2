import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Mail, Phone } from "lucide-react";
import { practice } from "@/content/site";
import { cn } from "@/lib/utils";

export function SidebarNav({
  title,
  current,
  items,
}: {
  title: string;
  current: string;
  items: { label: string; href: string }[];
}) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28">
      <div className="rounded-3xl border border-spruce/10 bg-white/55 p-6 backdrop-blur-sm">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-copper">
          {title}
        </p>
        <nav aria-label={title} className="mt-4">
          <ul className="space-y-1">
            {items.map((item) => {
              const active = item.href === current;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-[0.83rem] leading-snug transition-colors",
                      active
                        ? "bg-spruce text-cream"
                        : "text-ink/65 hover:bg-spruce/[0.05] hover:text-spruce",
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      className={cn(
                        "size-3 shrink-0",
                        active ? "text-brass" : "text-copper/50",
                      )}
                      aria-hidden
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-spruce p-6 text-cream">
        <div className="absolute inset-0 radial-glow-dark" aria-hidden />
        <div className="relative">
          <CalendarCheck className="size-6 text-brass" aria-hidden />
          <p className="mt-3 font-display text-xl leading-snug">
            Ready to book your visit?
          </p>
          <p className="mt-2 text-[0.8rem] leading-relaxed text-cream/60">
            Request an appointment online, or talk with our front office team.
          </p>
          <a
            href={practice.portal}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-copper px-4 py-2.5 text-[0.78rem] font-medium text-white transition-colors hover:bg-clay"
          >
            Request appointment
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
          <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-[0.78rem] text-cream/65">
            <a
              href={practice.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-cream"
            >
              <Phone className="size-3.5 text-brass" aria-hidden />
              {practice.phone}
            </a>
            <a
              href={practice.emailHref}
              className="flex items-center gap-2 transition-colors hover:text-cream"
            >
              <Mail className="size-3.5 text-brass" aria-hidden />
              {practice.email}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
