import { Sidebar } from "./components/layout/sidebar";
import { Topbar } from "./components/layout/topbar";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import { ProjectCard } from "./components/app/project-card";
import { TaskCard } from "./components/app/task-card";

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex flex-1 flex-col">
        <Topbar title="Test UI Kit" subtitle="Vérification des composants" />

        <div className="space-y-8 p-6">

          {/* Boutons */}
          <section>
            <h2 className="mb-4 text-lg font-bold">Boutons</h2>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="gradient">Gradient</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button loading>Loading</Button>
            </div>
          </section>

          {/* Inputs */}
          <section>
            <h2 className="mb-4 text-lg font-bold">Inputs</h2>
            <div className="max-w-md space-y-4">
              <Input label="Nom" placeholder="Projet Evoria" />
              <Input label="Erreur" error="Champ obligatoire" />
              <Textarea label="Description" placeholder="Décris ton projet..." />
            </div>
          </section>

          {/* Badges */}
          <section>
            <h2 className="mb-4 text-lg font-bold">Badges</h2>
            <div className="flex gap-2">
              <Badge>Default</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
          </section>

          {/* Cards */}
          <section className="grid gap-6 lg:grid-cols-2">
            <ProjectCard
              title="Evoria"
              description="Création du MVP"
              status="En cours"
              progress={60}
              dueDate="15 juin"
            />

            <TaskCard
              title="Créer le dashboard"
              status="En cours"
              priority="Haute"
              assignee="EM"
              comments={2}
              attachments={1}
            />
          </section>

        </div>
      </main>
    </div>
  );
}
