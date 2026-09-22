import { useState, useEffect } from "react";
import { githubService } from "@services/githubService";

export const useGitHubProjects = (limit = 6, requiredTopic = null) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await githubService(limit);
        let filteredProjects = data;

        if (requiredTopic) {
          filteredProjects = data.filter((repo) =>
            repo.topics?.some(
              (topic) => topic.toLowerCase() === requiredTopic.toLowerCase(),
            ),
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
