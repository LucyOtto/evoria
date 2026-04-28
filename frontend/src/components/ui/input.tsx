import * as React from "react";
import { cn } from "../../lib/utils.ts";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, description, error, leftIcon, rightAddon, id, ...props }, ref) => {
    const inputId = id ?? React.useId();

    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold text-slate-200">
            {label}
          </label>
        )}

        <div
          className={cn(
            "flex h-11 items-center gap-2 rounded-2xl border bg-slate-900/80 px-3 transition-colors",
            error
              ? "border-red-500/80 focus-within:border-red-400 focus-within:ring-red-400/30"
              : "border-slate-700 focus-within:border-blue-400 focus-within:ring-blue-400/30",
            "focus-within:ring-2",
            props.disabled && "cursor-not-allowed opacity-50"
          )}
        >
          {leftIcon && <span className="text-slate-400">{leftIcon}</span>}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full bg-transparent text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none disabled:cursor-not-allowed",
              className
            )}
            aria-invalid={Boolean(error)}
            {...props}
          />
          {rightAddon && <span className="text-slate-400">{rightAddon}</span>}
        </div>

        {description && !error && <p className="text-xs text-slate-400">{description}</p>}
        {error && <p className="text-xs font-medium text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
