"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { practice, nav } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Link asChild active={active}>
        <Link
          href={href}
          className={cn(
            "relative flex h-10 items-center rounded-full px-4 text-[0.86rem] font-medium transition-colors",
            active
              ? "bg-spruce/[0.07] text-spruce"
              : "text-ink/70 hover:bg-spruce/[0.04] hover:text-spruce",
          )}
        >
          {label}
        </Link>
      </NavigationMenuPrimitive.Link>
    </NavigationMenuPrimitive.Item>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  // The menu closes automatically when navigation changes the pathname.
  const mobileMenuOpen = mobileOpen && menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-spruce text-cream">
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-5 text-[0.66rem] tracking-[0.08em] sm:px-8 lg:px-10">
          <p className="flex items-center gap-2 uppercase">
            <span className="inline-block size-1.5 rounded-full bg-brass" aria-hidden />
            Now welcoming new patients
          </p>
          <div className="flex items-center gap-5">
            <a
              href={practice.phoneHref}
              className="hidden items-center gap-1.5 text-cream/75 transition-colors hover:text-cream sm:flex"
            >
              <Phone className="size-3" aria-hidden />
              {practice.phone}
            </a>
            <p className="hidden items-center gap-1.5 text-cream/60 md:flex">
              <MapPin className="size-3" aria-hidden />
              {practice.address.street}, {practice.address.city}
            </p>
            <a
              href={practice.portal}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 uppercase text-brass transition-colors hover:text-cream"
            >
              Request an appointment
              <ArrowUpRight className="size-3" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-spruce/10 bg-cream/90 shadow-[0_10px_40px_-30px_rgba(11,43,37,0.8)] backdrop-blur-xl"
            : "border-transparent bg-cream/75 backdrop-blur-lg",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 lg:px-10",
            scrolled ? "h-[70px]" : "h-[82px]",
          )}
        >
          <Logo priority />

          <NavigationMenuPrimitive.Root className="relative hidden lg:block">
            <NavigationMenuPrimitive.List className="flex items-center gap-0.5">
              <NavLink href="/" label="Home" active={pathname === "/"} />

              {nav.map((group) => {
                const active = isActive(pathname, group.href);
                return (
                  <NavigationMenuPrimitive.Item key={group.href}>
                    <NavigationMenuPrimitive.Trigger
                      className={cn(
                        "group flex h-10 cursor-pointer items-center gap-1 rounded-full px-4 text-[0.86rem] font-medium transition-colors data-[state=open]:bg-spruce/[0.07] data-[state=open]:text-spruce",
                        active
                          ? "bg-spruce/[0.07] text-spruce"
                          : "text-ink/70 hover:bg-spruce/[0.04] hover:text-spruce",
                      )}
                    >
                      {group.label}
                      <ChevronDown
                        className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </NavigationMenuPrimitive.Trigger>

                    <NavigationMenuPrimitive.Content className="data-[motion=from-start]:animate-[nav-from-start_240ms_ease] data-[motion=from-end]:animate-[nav-from-end_240ms_ease] data-[motion=to-start]:animate-[nav-to-start_200ms_ease] data-[motion=to-end]:animate-[nav-to-end_200ms_ease]">
                      <div className="w-[680px] overflow-hidden rounded-3xl border border-white/70 bg-cream/95 p-3 shadow-[0_30px_80px_-30px_rgba(11,43,37,0.45)] backdrop-blur-2xl">
                        <div className="grid grid-cols-[1fr_190px] gap-3">
                          <div className="grid grid-cols-2 gap-1">
                            {group.children.map((child) => (
                              <NavigationMenuPrimitive.Link
                                key={child.href}
                                asChild
                              >
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "group/link flex flex-col rounded-2xl px-3.5 py-3 transition-colors hover:bg-spruce/[0.05]",
                                    pathname === child.href && "bg-spruce/[0.05]",
                                  )}
                                >
                                  <span className="flex items-center gap-1.5 text-[0.86rem] font-semibold text-spruce">
                                    {child.label}
                                    <ArrowUpRight
                                      className="size-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100"
                                      aria-hidden
                                    />
                                  </span>
                                  <span className="mt-0.5 text-[0.73rem] leading-snug text-stone">
                                    {child.description}
                                  </span>
                                </Link>
                              </NavigationMenuPrimitive.Link>
                            ))}
                          </div>

                          <Link
                            href={group.href}
                            className="group/feature relative flex flex-col justify-between overflow-hidden rounded-2xl bg-spruce p-4 text-cream"
                          >
                            <div
                              className="absolute inset-0 opacity-60 radial-glow-dark"
                              aria-hidden
                            />
                            <div className="relative">
                              <span className="font-mono text-[0.56rem] uppercase tracking-[0.22em] text-brass">
                                Explore
                              </span>
                              <p className="mt-2 font-display text-lg leading-snug">
                                {group.label}
                              </p>
                              <p className="mt-1 text-[0.7rem] leading-snug text-cream/60">
                                {group.description}
                              </p>
                            </div>
                            <span className="relative mt-6 inline-flex items-center gap-1 text-[0.7rem] text-brass">
                              View all
                              <ArrowUpRight className="size-3" aria-hidden />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuPrimitive.Content>
                  </NavigationMenuPrimitive.Item>
                );
              })}

              <NavLink
                href="/contact-us"
                label="Contact"
                active={pathname === "/contact-us"}
              />
            </NavigationMenuPrimitive.List>

            <div className="absolute left-0 top-full flex w-full justify-center">
              <NavigationMenuPrimitive.Viewport className="flex w-full justify-center pt-2" />
            </div>
          </NavigationMenuPrimitive.Root>

          <div className="flex items-center gap-2">
            <a
              href={practice.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-spruce/12 px-4 py-2.5 text-[0.82rem] font-medium text-spruce transition-colors hover:border-spruce/25 hover:bg-spruce/[0.04] xl:flex"
            >
              <Phone className="size-3.5 text-copper" aria-hidden />
              {practice.phone}
            </a>
            <Button asChild size="md" className="hidden sm:inline-flex">
              <a href={practice.portal} target="_blank" rel="noreferrer">
                Request Appointment
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </Button>

            <DialogPrimitive.Root
              open={mobileMenuOpen}
              onOpenChange={(open) => {
                setMobileOpen(open);
                if (open) setMenuPath(pathname);
              }}
            >
              <DialogPrimitive.Trigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="grid size-11 cursor-pointer place-items-center rounded-full border border-spruce/12 text-spruce transition-colors hover:bg-spruce/[0.05] lg:hidden"
                >
                  <Menu className="size-5" aria-hidden />
                </button>
              </DialogPrimitive.Trigger>

              <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-spruce/35 backdrop-blur-sm data-[state=closed]:animate-[fade-out_180ms_ease] data-[state=open]:animate-[fade-in_220ms_ease] lg:hidden" />
                <DialogPrimitive.Content
                  className="fixed inset-0 z-[101] flex h-dvh w-full flex-col overflow-y-auto bg-cream data-[state=closed]:animate-[fade-out_180ms_ease] data-[state=open]:animate-[fade-in_240ms_ease] lg:hidden"
                >
                  <DialogPrimitive.Title className="sr-only">
                    Site navigation
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="sr-only">
                    Navigate to pages across the Dakota Dental Associates website.
                  </DialogPrimitive.Description>

                  <div className="flex h-[82px] shrink-0 items-center justify-between px-5 sm:px-8">
                    <Logo />
                    <DialogPrimitive.Close asChild>
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="grid size-11 cursor-pointer place-items-center rounded-full border border-spruce/12 text-spruce"
                      >
                        <X className="size-5" aria-hidden />
                      </button>
                    </DialogPrimitive.Close>
                  </div>

                  <div className="flex-1 px-5 pb-10 sm:px-8">
                    <nav aria-label="Mobile" className="divide-y divide-spruce/10">
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-4 font-display text-2xl text-spruce"
                      >
                        Home
                        <ArrowUpRight className="size-4 text-copper" aria-hidden />
                      </Link>
                      {nav.map((group) => (
                        <MobileGroup
                          key={group.href}
                          group={group}
                          pathname={pathname}
                          onNavigate={() => setMobileOpen(false)}
                        />
                      ))}
                      <Link
                        href="/contact-us"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-4 font-display text-2xl text-spruce"
                      >
                        Contact Us
                        <ArrowUpRight className="size-4 text-copper" aria-hidden />
                      </Link>
                    </nav>

                    <div className="mt-8 grid gap-3">
                      <Button asChild size="lg" className="w-full">
                        <a href={practice.portal} target="_blank" rel="noreferrer">
                          Request an Appointment
                          <ArrowUpRight className="size-4" aria-hidden />
                        </a>
                      </Button>
                      <div className="grid grid-cols-2 gap-3">
                        <Button asChild variant="outline" size="md">
                          <a href={practice.phoneHref}>
                            <Phone className="size-4" aria-hidden />
                            Call
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="md">
                          <a href={practice.emailHref}>
                            <Mail className="size-4" aria-hidden />
                            Email
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="mt-8 space-y-2 rounded-2xl border border-spruce/10 bg-white/50 p-4 text-sm text-stone">
                      <p className="flex items-start gap-2">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden />
                        {practice.addressLine}
                      </p>
                      <p className="flex items-start gap-2">
                        <Clock className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden />
                        Mon–Wed 7:10–5 · Thu 7:10–12 & 1–5 · Fri 8–12
                      </p>
                    </div>
                  </div>
                </DialogPrimitive.Content>
              </DialogPrimitive.Portal>
            </DialogPrimitive.Root>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileGroup({
  group,
  pathname,
  onNavigate,
}: {
  group: (typeof nav)[number];
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const active = isActive(pathname, group.href);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          href={group.href}
          onClick={onNavigate}
          className={cn(
            "flex-1 py-4 font-display text-2xl",
            active ? "text-copper" : "text-spruce",
          )}
        >
          {group.label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={`${open ? "Hide" : "Show"} ${group.label} pages`}
          className="grid size-9 cursor-pointer place-items-center rounded-full border border-spruce/12 text-spruce"
        >
          <ChevronDown
            className={cn("size-4 transition-transform duration-300", open && "rotate-180")}
            aria-hidden
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 180, damping: 26 }
            }
            className="overflow-hidden"
          >
            <div className="grid gap-1 pb-4 pl-1">
              {group.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-ink/70 transition-colors hover:bg-spruce/[0.05] hover:text-spruce"
                >
                  {child.label}
                  <ArrowUpRight className="size-3.5 text-copper/70" aria-hidden />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
