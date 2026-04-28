import { LayoutDashboard, FolderKanban, Users, CalendarDays, Settings } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 px-4 py-5">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-pink-500" />
        <div>
          <p className="font-heading text-lg font-bold text-white">Evoria</p>
          <p className="text-xs text-slate-500">Team workspace</p>
        </div>
      </div>

      <nav className="space-y-1">
        <SidebarItem icon={<LayoutDashboard size={18} />} label="Tableau de bord" active />
        <SidebarItem icon={<FolderKanban size={18} />} label="Projets" badge={6} />
        <SidebarItem icon={<Users size={18} />} label="Équipe" />
        <SidebarItem icon={<CalendarDays size={18} />} label="Planning" />
      </nav>

      <div className="mt-auto border-t border-slate-800 pt-4">
        <SidebarItem icon={<Settings size={18} />} label="Paramètres" />
      </div>
    </aside>
  );
