import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils.ts";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-semibold leading-none",
  {
    variants: {
      variant: {
        neutral: "border-slate-700 bg-slate-800 text-slate-200",
        info: "border-sky-400/30 bg-sky-400/10 text-sky-300",
        success: "border-green-400/30 bg-green-400/10 text-green-300",
        warning: "border-amber-400/30 bg-amber-400/10 text-amber-300",
        error: "border-red-400/30 bg-red-400/10 text-red-300",
        brand: "border-violet-400/30 bg-violet-500/10 text-violet-200",
        gradient:
          "border-transparent bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 text-white",
        outline: "border-slate-600 bg-transparent text-slate-300",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-2.5 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />;
