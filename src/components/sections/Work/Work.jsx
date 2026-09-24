import { useGitHubProjects } from "@/hooks/useGitHubProjects";
import { Card } from "@ui/Card/Card";

export default function Work() {
  const { projects, loading, error } = useGitHubProjects(6, "portfolio");

  if (loading) return <p>Cargando proyectos...</p>;
  if (error) return <p className="error-message bg-danger">Error: {error}</p>;

  return (
    <section
      id="project"
      className="sharedClass px-0 pt-5 container-fluid d-flex flex-column justify-content-center align-items-center text-center">
      <h2 className="sharedTitle apperEffect">Mis Proyectos</h2>
      <h3 className="apperEffect">
        Descubre mi trabajo reciente en diseño, desarrollo y creatividad visual
      </h3>
      <div className="d-flex flex-wrap col-11 p-2 m-0 row-gap-3 justify-content-evenly align-items-center">
        {projects.map((item) => (
          <Card key={item.id} project={item} />
        ))}
      </div>
    </section>
  );
}
