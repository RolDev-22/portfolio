export const ServicesList = ({ getServicesList }) => {
  return (
    <>
      {getServicesList().map(({ id, Icon, title, description }) => (
        <article
          key={id}
          className="apperEffect d-flecolumnex-wrap col-12 col-md-3 text-center justify-content-center align-items-center p-2">
          <figure>
            <Icon size={72} />
          </figure>
          <h2 className="fs-4">{title}</h2>
          <p className="fs-6">{description}</p>
        </article>
      ))}
    </>
  );
};
