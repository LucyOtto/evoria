import * as React from "react";
import { cn } from "../../lib/utils";

export interface TabItem {
  value: string;
  label: string;
  count?: number;
}

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Tabs({ items, value, onChange, className }: TabsProps) {
  return (
    <div className={cn("inline-flex rounded-2xl border border-slate-800 bg-slate-900 p-1", className)}>
      {items.map((item) => {
        const active = item.value === value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
              active
                ? "bg-slate-800 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-100"
            )}
          >
            {item.label}
            {typeof item.count === "number" && (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[11px]",
                  active ? "bg-blue-500/20 text-blue-200" : "bg-slate-800 text-slate-400"
                )}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
