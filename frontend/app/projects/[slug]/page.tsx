import projects from "@/Components/data/project.json";
import Link from "next/link";
import "@/app/projects/[slug]/slug.scss";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) return notFound();

  const project = projects[projectIndex];

  // Projet suivant (revient au début si fin)
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <section className="project-page">
      <div className="project-cover">
        <img src={project.thumbnail} alt={project.title} />
      </div>

      <div className="project-title">
        <h1>{project.title}</h1>
      </div>

      <div className="project-intro">
        <div className="project-data">
          {/* Catégorie unique */}
          {project.category && (
            <div className="data-category">
              <div className="category-name">
                <h3>Catégorie</h3>
              </div>
              <p>{project.category}</p>
            </div>
          )}

          {/* Année */}
          <div className="data-category">
            <div className="category-name">
              <h3>Année</h3>
            </div>
            <p>{project.year}</p>
          </div>

          {/* Rôle */}
          {project.role && (
            <div className="data-category">
              <div className="category-name">
                <h3>Rôle</h3>
              </div>
              <p>{project.role}</p>
            </div>
          )}

          {/* Technologies (tags) */}
          {project.tags && project.tags.length > 0 && (
            <div className="skills-stack">
              <div className="category-name">
                <h3>Technologies</h3>
              </div>
              <ul>
                {project.tags.map((tag, idx) => (
                  <li key={idx}>{tag}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills (si présent) */}
          {project.skills && project.skills.length > 0 && (
            <div className="skills-stack">
              <div className="category-name">
                <h3>Compétences</h3>
              </div>
              <ul>
                {project.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="project-description">
          <p>{project.description}</p>

          {/* LIENS GitHub et Website */}
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                Voir sur GitHub
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link website-link"
              >
                Voir le site
              </a>
            )}
          </div>
        </div>
      </div>

      {/* IMAGES */}
      <div className="project-images">
        {project.images && project.images.length > 0 ? (
          project.images.map((img, idx) => (
            <div key={idx} className="image-container">
              <img
                src={img}
                alt={`${project.title} - capture ${idx + 1}`}
                className="image"
              />
            </div>
          ))
        ) : (
          <p>Aucune image disponible</p>
        )}
      </div>

      {/* NAVIGATION SUIVANTE */}
      <div className="project-next">
        <Link href={`/projects/${nextProject.slug}`} className="next-left">
          Projet suivant
        </Link>

        <Link href={`/projects/${nextProject.slug}`} className="next-right">
          {nextProject.title}
        </Link>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}
