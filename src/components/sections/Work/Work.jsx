import { useGitHubProjects } from "@/hooks/useGitHubProjects";
import { Card } from "@ui/Card/Card";

export default function Work() {
  const { projects, loading, error } = useGitHubProjects(6, "portfolio");

  if (loading) return <p>Cargando proyectos...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;

  return (
    <section
      id="project"
      className="sharedClass px-0 pt-5 container-fluid d-flex flex-column flex-lg-row justify-content-center align-items-center">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
