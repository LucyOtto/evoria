import * as React from "react";
import { cn } from "../../lib/utils";

interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  badge?: string | number;
}

export function SidebarItem({
  icon,
  label,
  active,
  collapsed,
  badge,
  className,
  ...props
}: SidebarItemProps) {
  return (
    <button
      type="button"
      className={cn(
        "group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition-colors",
        active
          ? "bg-blue-500/15 text-blue-200"
          : "text-slate-400 hover:bg-slate-800/80 hover:text-slate-100",
        collapsed && "justify-center px-2",
        className
      )}
      aria-label={collapsed ? label : undefined}
      {...props}
    >
      <span className={cn("shrink-0", active ? "text-blue-300" : "text-slate-500 group-hover:text-slate-300")}>
        {icon}
      </span>

      {!collapsed && <span className="truncate">{label}</span>}

      {!collapsed && badge && (
        <span className="ml-auto rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
          {badge}
        </span>
      )}
    </button>
  );
}
