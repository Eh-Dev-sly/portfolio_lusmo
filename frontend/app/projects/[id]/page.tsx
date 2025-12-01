"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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
}

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProject() {
      try {
        const res = await fetch(`http://localhost:5000/api/projects/${params.id}`);
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      getProject();
    }
  }, [params.id]);

  if (loading) return <div>Chargement...</div>;
  if (!project) return <div>Projet non trouvé</div>;

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      
      {project.image && (
        <img src={project.image} alt={project.title} />
      )}

      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>

      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          Voir sur GitHub
        </a>
      )}

      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          Voir le site
        </a>
      )}
    </div>
  );
}