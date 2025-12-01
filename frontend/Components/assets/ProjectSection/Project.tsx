"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Cursor from "@/Components/assets/utils/cursor/Cursor";
import "@/Components/assets/ProjectSection/Project.scss";

// Interface TypeScript pour les projets
interface Project {
  _id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function getMongoDBProjects() {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/projects");
      
      if (!res.ok) {
        throw new Error('Erreur lors de la récupération des projets');
      }
      
      const json = await res.json();
      setProjects(json || []);
      setError(null);
    } catch (err) {
      console.error("Erreur:", err);
      setError("Impossible de charger les projets");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMongoDBProjects();
  }, []);

  // Affichage pendant le chargement
  if (loading) {
    return (
      <section className="project">
        <Cursor />
        <div className="project-wrapper">
          <div className="section-header">
            <h1 className="header-title">Mes Projets</h1>
          </div>
          <div className="projects-container">
            <p className="loading-text">Chargement des projets...</p>
          </div>
        </div>
      </section>
    );
  }

  // Affichage en cas d'erreur
  if (error) {
    return (
      <section className="project">
        <Cursor />
        <div className="project-wrapper">
          <div className="section-header">
            <h1 className="header-title">Mes Projets</h1>
          </div>
          <div className="projects-container">
            <p className="error-text">{error}</p>
            <button onClick={getMongoDBProjects} className="retry-button">
              Réessayer
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="project">
      <Cursor />

      <div className="project-wrapper">
        <div className="section-header">
          <h1 className="header-title">Mes Projets</h1>
        </div>

        <div className="projects-container">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project._id} className="project-card">
                <Link href={`/projects/${project._id}`}>
                  <div className="project-link-content" data-link-cursor>
                    <h4 className="project-title">{project.title}</h4>
                    {" — "}
                    <p className="project-category">{project.category}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="no-projects">Aucun projet disponible pour le moment.</p>
          )}
        </div>
      </div>
    </section>
  );
}