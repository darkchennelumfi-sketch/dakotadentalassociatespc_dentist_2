import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumbs({
  items,
  tone = "light",
  className,
}: {
  items: { label: string; href?: string }[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-[0.72rem]", className)}>
      <Link
        href="/"
        className={cn(
          "transition-colors",
          tone === "dark"
            ? "text-cream/50 hover:text-cream"
            : "text-stone hover:text-spruce",
        )}
      >
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight
            className={cn(
              "size-3",
              tone === "dark" ? "text-cream/25" : "text-stone/40",
            )}
            aria-hidden
          />
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "transition-colors",
                tone === "dark"
                  ? "text-cream/50 hover:text-cream"
                  : "text-stone hover:text-spruce",
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span
              aria-current="page"
              className={cn(
                tone === "dark" ? "text-cream/80" : "text-spruce",
              )}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
