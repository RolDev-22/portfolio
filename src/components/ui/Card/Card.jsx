export const Card = ({ projects }) => {
  const { name, description, language, githubUrl, demoUrl, topics } = projects;
  return (
    <article className="project-card">
      <h3>{name}</h3>
      <p>{description}</p>

      <div className="tags">
        {language && <span className="tag">{language}</span>}
      </div>

      <div className="links">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            Código
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        {topics && <spam>{topics}</spam>}
      </div>
    </article>
  );
};
