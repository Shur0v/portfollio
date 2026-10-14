import type { Project } from "../lib/project-types";

export function ProjectGallery({ project }: { project: Project }) {
  if (!project.gallery?.length) return null;
  return <div className="tt-section"><div className="tt-section-inner tt-wrap">
    {project.gallery.map((image, index) => <div key={image + index} className="tt-image margin-bottom-60 tt-anim-fadeinup">
      <a href={image} data-fancybox="project-gallery"><img src={image} loading="lazy" alt={`${project.title} — image ${index + 1}`} /></a>
    </div>)}
  </div></div>;
}
