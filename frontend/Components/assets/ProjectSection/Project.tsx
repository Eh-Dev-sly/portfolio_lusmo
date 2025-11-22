"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Cursor from "@/Components/assets/utils/cursor/Cursor";
import "@/Components/assets/ProjectSection/Project.scss";

export default function Project() {
  const [projects, setProjects] = useState<any[]>([]);

  async function getStrapiData() {
    try {
      const res = await fetch("http://localhost:1338/api/projects?populate=*");
      const json = await res.json();
      setProjects(json.data || []);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getStrapiData();
  }, []);

  return (
    <section className="project">

      <Cursor />

      <div className="project-wrapper">
        <div className="section-header">
          <h1 className="header-title">Mes Projets</h1>
        </div>

        <div className="projects-container">
          {projects.map((project) => {
            const p = project.attributes;
            return (
              <div key={project.id} className="project-card">
                <Link href={`/projects/${project.Slug}`}>
                  <div className="project-link-content" data-link-cursor>
                    <h4 className="project-title">{project.Title}</h4>
                    {" — "}
                    <p className="project-category">{project.Role}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
