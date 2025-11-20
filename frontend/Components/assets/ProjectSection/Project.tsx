import qs from "qs";
import Link from "next/link";
import "@/Components/assets/ProjectSection/Project.scss";

async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1338";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Project() {
  const strapiData = await getStrapiData("/api/projects?populate=*");

  return (
    <section className="project">
      <div className="project-wrapper">
        <div className="section-header">
          <h1 className="header-title">Mes Projets</h1>
        </div>
        <div className="projects-container">
          {strapiData?.data?.map((project: any) => (
            <div key={project.id} className="project-card">
              <Link href={`/projects/${project.Slug}`}>
                <div className="project-link-content">
                  <h4 className="project-title">{project.Title}</h4>
                  {" — "}
                  <p className="project-category">{project.Role}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
