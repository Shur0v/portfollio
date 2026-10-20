import type { ReactNode } from "react";
import type { Project } from "../lib/project-types";

export function ProjectHero({ project, children }: { project: Project; children?: ReactNode }) {
  if (project.layoutContent && project.template === 3 && project.video.length) return <div className="ph-video ph-video-cover-4"><div className="ph-video-inner"><video loop muted autoPlay playsInline preload="metadata" poster={project.heroImage || project.image}>{project.video.map(source => <source key={source.type} src={source.type === "video/webm" ? "/assets/vids/placeholder.webm" : "/assets/vids/placeholder.mp4"} data-src={source.src} type={source.type} />)}</video></div></div>;
  if (project.layoutContent && project.template === 3) return <div className="ph-image ph-image-cover-4"><div className="ph-image-inner"><img src={project.heroImage || project.image} alt={project.title} /></div></div>;
  if (!project.heroImage) return <>{children}</>;
  return <div className="ph-image ph-image-cover-4">
    <div className="ph-image-inner"><img src={project.heroImage} alt={project.title} /></div>
  </div>;
}
