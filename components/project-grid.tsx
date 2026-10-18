"use client";

import { useSiteContent } from "./site-content-provider";
import type { Project } from "../lib/project-types";
import { mediaLabel } from "../lib/media-label";
import { Fragment } from "react";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const content = useSiteContent("home");
  const cards = projects.flatMap(project => [{ project, position: project.order, copy: false }, ...(project.repeatInGrid ? [{ project, position: project.order + 9, copy: true }] : [])]).sort((left, right) => left.position - right.position);
  return <div className="tt-grid-list">
    {cards.map(({ project, copy }) => <div key={`${project.id}-${copy}`} className={`tt-grid-item ${[project.category, ...(project.additionalCategories || [])].join(" ").toLowerCase()}`}>
      <div className="tt-grid-item-inner">
        <div className={`tt-portfolio-grid-item${project.portrait ? " tt-pgi-portrait" : ""}`}>
          <a href={`/projects/${project.slug}`} className={project.video.length ? "tt-pgi-video" : "tt-pgi-image"} data-cursor={mediaLabel(content.values["extra-label-4"])}>
            {project.video.length ? <video loop muted preload="metadata" poster={project.image}>
              {project.video.map(source => <source key={source.src} src={source.type === "video/webm" ? "/assets/vids/placeholder.webm" : "/assets/vids/placeholder.mp4"} data-src={source.src} type={source.type} />)}
            </video> : <img src={project.image} loading="lazy" alt="Image" />}
          </a>
          <div className="tt-pgi-info">
            <h2 className="tt-pgi-title"><a href={`/projects/${project.slug}`}>{project.title}</a></h2>
            <a href={`/projects/${project.slug}`} className="tt-pgi-icon" aria-label={`View ${project.title}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" /></svg>
            </a>
            <div className="tt-pgi-categories">{[project.category, ...(project.additionalCategories || [])].map((category, index) => <Fragment key={category}>{index > 0 && ", "}<a href="/#portfolio" className="tt-pgi-category">{category}</a></Fragment>)}</div>
          </div>
        </div>
      </div>
    </div>)}
  </div>;
}
