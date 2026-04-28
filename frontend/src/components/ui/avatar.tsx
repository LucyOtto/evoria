import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-800 font-semibold text-slate-200",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback: string;
  status?: "online" | "offline" | "busy";
}

export function Avatar({ className, size, src, alt, fallback, status, ...props }: AvatarProps) {
  const statusClasses = {
    online: "bg-green-400",
    offline: "bg-slate-500",
    busy: "bg-amber-400",
  };

  return (
    <div className={cn(avatarVariants({ size }), className)} {...props}>
      {src ? (
        <img src={src} alt={alt ?? fallback} className="h-full w-full object-cover" />
      ) : (
        <span>{fallback.slice(0, 2).toUpperCase()}</span>
      )}

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-slate-950",
            statusClasses[status]
          )}
          aria-label={`Statut : ${status}`}
        />
      )}
    </div>
  );
}
