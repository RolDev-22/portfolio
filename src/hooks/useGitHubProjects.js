import { useState, useEffect } from "react";
import { fetchGitHubProjects } from "@services/githubService";

export const useGitHubProjects = (limit = 6, requiredTopic = null) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchGitHubProjects(limit);
        let filteredProjects = data;

        if (requiredTopic) {
          filteredProjects = data.filter((repo) =>
            repo.topic.includes(requiredTopic.toLowerCase()),
          );
        }

        if (isMounted) {
          setProjects(filteredProjects);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Error al obtener projectos");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, [limit, requiredTopic]);
  return { projects, loading, error };
};
