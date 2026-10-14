import type { ReactNode } from "react";
import type { Project } from "../lib/project-types";

export function ProjectHero({ project, children }: { project: Project; children?: ReactNode }) {
  if (!project.heroImage) return <>{children}</>;
  return <div className="ph-image ph-image-cover-4">
    <div className="ph-image-inner"><img src={project.heroImage} alt={project.title} /></div>
  </div>;
}
