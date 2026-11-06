import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-xl border border-spruce/15 bg-white/70 px-4 py-3 text-sm text-ink shadow-sm transition-all placeholder:text-stone/60 focus-visible:border-fern/60 focus-visible:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-fern/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
