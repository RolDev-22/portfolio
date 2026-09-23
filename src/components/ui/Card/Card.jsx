import styles from "./Card.module.css";

export const Card = ({ project }) => {
  const { name, description, githubUrl, demoUrl, image, topics } = project;
  return (
    <article
      className={`${styles.cardStyle} container-fluid d-flex flex-column col-12 col-md-6 col-lg-5 rounded-3 p-2 m-0 gap-2 justify-content-center align-items-center`}>
      <div className={`${styles.containerImg} d-flex justify-content-end`}>
        <figure className={`${styles.figureStyle} d-flex justify-content-end`}>
          <img
            src={image}
            alt={name}
            onError={(e) => {
              e.target.src = "/img_prev.jpg";
            }}
            className="img-fluid w-100"
          />
        </figure>
      </div>
      <h3>{name}</h3>
      <p className={`${styles.descriptionStyle}`}>{description}</p>

      <div className="user-select-none d-flex col-12 flex-wrap justify-content-between row-gap-3">
        {topics &&
          topics
            .filter((topic) => topic.toLowerCase() !== "portfolio")
            .map((topic) => (
              <span key={topic} className={`${styles.tag} rounded-4`}>
                {topic}
              </span>
            ))}
      </div>

      <div className="container-fluid d-flex flex-column flex-md-row gap-2 mt-3 justify-content-between">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btnCard} ${styles.general} d-flex p-2 col-12 col-md-5 rounded-5 justify-content-center`}>
            Código
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btnCard} ${styles.general} d-flex p-2 col-12 col-md-5 rounded-5 justify-content-center`}>
            Demo
          </a>
        )}
      </div>
    </article>
  );
};
