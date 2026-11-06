import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-spruce text-cream shadow-[0_14px_35px_-18px_rgba(11,43,37,0.9)] hover:bg-pine hover:shadow-[0_18px_40px_-18px_rgba(11,43,37,0.8)]",
        copper:
          "bg-copper text-white shadow-[0_14px_35px_-18px_rgba(178,107,69,0.9)] hover:bg-clay",
        light:
          "bg-cream text-spruce shadow-[0_14px_35px_-20px_rgba(0,0,0,0.6)] hover:bg-white",
        outline:
          "border border-spruce/20 bg-transparent text-spruce hover:border-spruce/40 hover:bg-spruce/[0.04]",
        outlineLight:
          "border border-white/30 bg-transparent text-cream hover:border-white/60 hover:bg-white/10",
        ghost: "text-spruce hover:bg-spruce/[0.06]",
        link: "h-auto rounded-none px-0 text-fern underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-[0.8rem]",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-[0.93rem]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
