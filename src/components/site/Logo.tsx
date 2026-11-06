import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Dakota Dental Associates — home"
      className={cn("group inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/images/logo.png"
        alt="Dakota Dental Associates"
        width={200}
        height={67}
        priority={priority}
        className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.02] sm:h-12"
      />
    </Link>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)}>
      <span className="grid size-11 place-items-center rounded-full border border-cream/20 bg-cream/[0.06] text-brass">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="size-6"
          aria-hidden
        >
          <path d="M12 5.5c2.2-3 7-2.2 7 2.1 0 3.4-1.5 5.2-2.1 8.5-.3 1.7-.9 3-1.9 3-1.2 0-1.3-2.6-2.4-2.6h-1.2c-1.1 0-1.2 2.6-2.4 2.6-1 0-1.6-1.3-1.9-3C6.5 12.8 5 11 5 7.6c0-4.3 4.8-5.1 7-2.1Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-tight text-cream">
          Dakota Dental
        </span>
        <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.32em] text-cream/55">
          Associates
        </span>
      </span>
    </Link>
  );
}
