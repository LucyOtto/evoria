import { Bell, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";

interface TopbarProps {
  title: string;
  subtitle?: string;
}

export function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <header className="flex min-h-20 items-center justify-between gap-6 border-b border-slate-800 bg-slate-950/80 px-6 backdrop-blur-xl">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden h-10 items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-500 md:flex">
          <Search size={16} />
          <span>Rechercher...</span>
          <kbd className="ml-10 rounded-lg border border-slate-700 px-1.5 py-0.5 text-[11px] text-slate-400">
            Ctrl K
          </kbd>
        </div>

        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell size={18} />
        </Button>

        <Avatar fallback="EM" status="online" />
      </div>
    </header>
  );
}
