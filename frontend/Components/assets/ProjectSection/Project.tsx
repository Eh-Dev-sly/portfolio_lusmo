"use client";

import Link from "next/link";
import "@/Components/assets/ProjectSection/Project.scss";

import projectsData from "@/Components/data/project.json";

export default function Project() {
  const projects = projectsData;

  return (
    <section className="project">
      <div className="project-wrapper">
        <div className="section-header">
          <h1 className="header-title">Mes Projets</h1>
        </div>

        <div className="projects-container">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="project-card">
                <Link href={`/projects/${project.title}`}>
                  <div className="project-link-content" data-link-cursor>
                    {/* Image de couverture */}
                    <div className="project-cover-image">
                      <img
                        src={project.thumbnail}
                        alt={`Image de couverture du projet ${project.title}`}
                        className="project-image"
                      />
                    </div>

                    {/* Bloc blanc avec titre et catégorie */}
                    <div className="project-info">
                      <h4 className="project-title">{project.title}</h4>
                      <p className="project-category">{project.category}</p>

                      {/* Tags */}
                      <div className="project-tags">
                        {Array.isArray(project.tags) &&
                          project.tags.map((tag, index) => (
                            <span key={index} className="tag">
                              {tag}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="no-projects">
              Aucun projet disponible pour le moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
