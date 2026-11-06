"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-spruce/10", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 cursor-pointer items-start justify-between gap-6 py-6 text-left text-lg font-medium text-spruce transition-colors hover:text-fern data-[state=open]:text-fern",
          className,
        )}
        {...props}
      >
        <span className="font-display text-xl leading-snug">{children}</span>
        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-spruce/15 transition-all duration-300 group-hover:border-fern/40 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-fern group-data-[state=open]:text-cream">
          <Plus className="size-4" aria-hidden />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=closed]:animate-[accordion-up_240ms_ease-out] data-[state=open]:animate-[accordion-down_280ms_ease-out]"
      {...props}
    >
      <div className={cn("space-y-3 pb-7 pr-12 text-[0.98rem] leading-relaxed text-ink/75", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
