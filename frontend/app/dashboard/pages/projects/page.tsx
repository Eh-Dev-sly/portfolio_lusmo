"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/dashboard/components/Sidebar/Sidebar"
import "@/app/dashboard/pages/projects/DashboardProject.scss";

interface Project {
  _id: string;
  title: string;
  slug: string;
  role: string;
  description?: string;
  image?: string;
  technologies?: string[];
  link?: string;
}

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function getProjects() {
    try {
      setLoading(true);
      setError(null);
      
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const res = await fetch(`${API_URL}/api/projects`);
      
      if (!res.ok) {
        throw new Error(`Erreur HTTP: ${res.status}`);
      }
      
      const json = await res.json();
      setProjects(json.data || []);
    } catch (err) {
      console.error("Erreur lors de la récupération des projets:", err);
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="dashboard">
      <div className="menu">
        <Sidebar />
      </div>

      <div className="project-wrapper">
        <div className="section-header">
          <h1 className="header-title">Mes Projets</h1>
        </div>

        {loading && <p>Chargement des projets...</p>}
        
        {error && (
          <div className="error-message">
            <p>Erreur: {error}</p>
            <button onClick={getProjects}>Réessayer</button>
          </div>
        )}

        <div className="projects-container">
          {!loading && !error && projects.length === 0 && (
            <p>Aucun projet trouvé.</p>
          )}
          
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              <Link href={`/projects/${project.slug}`}>
                <div className="project-link-content" data-link-cursor>
                  <h4 className="project-title">{project.title}</h4>
                  {" — "}
                  <p className="project-category">{project.role}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}