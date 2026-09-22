const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchGithubProjects = async (limit = 6) => {
  if (!GITHUB_USERNAME) {
    console.error(
      "El usuario de GitHub no está definido en las variables de entorno.",
    );
    throw new Error("Usuario de Github no definido en variables");
  }

  const response = await fetch(
    `${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=update&per_page=${limit}`,
  );

  if (!response.ok) {
    throw new Error("Error al conectar con la API de Github");
  }

  const repos = await response.json();

  return repos.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description || "Sin descripcion disponible",
    language: repo.language,
    githubUrl: repo.html_url,
    demoUrl: repo.homepage,
    topics: repo.topics || [],
  }));
};
