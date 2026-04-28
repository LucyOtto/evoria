import { CalendarDays } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar } from "../ui/avatar";

interface ProjectCardProps {
  title: string;
  description: string;
  status: "En cours" | "À valider" | "Bloqué" | "Terminé";
  progress: number;
  dueDate: string;
}

const statusVariant = {
  "En cours": "info",
  "À valider": "warning",
  Bloqué: "error",
  Terminé: "success",
} as const;

export function ProjectCard({ title, description, status, progress, dueDate }: ProjectCardProps) {
  return (
    <Card className="transition-colors hover:border-slate-700">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
  )
}
