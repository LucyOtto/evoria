import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white shadow-sm hover:bg-blue-500 active:bg-blue-700",
        gradient:
          "bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 text-white shadow-lg shadow-blue-950/30 hover:brightness-110 active:brightness-95",
        secondary:
          "bg-slate-800 text-slate-50 border border-slate-700 hover:bg-slate-700",
        tertiary:
          "bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-600 hover:bg-slate-800",
        ghost:
          "bg-transparent text-slate-300 hover:bg-slate-800/70 hover:text-white",
        danger:
          "bg-red-600 text-white hover:bg-red-500 active:bg-red-700",
        premium:
          "bg-amber-500 text-slate-950 hover:bg-amber-400 active:bg-amber-600",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-4 text-sm",
        lg: "h-13 px-5 text-base",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
