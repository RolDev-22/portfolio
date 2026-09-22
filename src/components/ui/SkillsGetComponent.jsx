import styles from "./UiStyles.module.css";
import { IconsGetComponent } from "@ui/IconsGetComponent";

export const SkillsGetComponent = ({ getSkillsList, getIconsList }) => {
  return (
    <>
      {getSkillsList().map(({ id, Icon, title, description }) => (
        <section
          key={id}
          className={`apperEffect ${styles.targetStyle} d-flex flex-column col-12 col-md-4 p-1 m-0 gap-1 justify-content-center align-items-center text-center`}>
          <figure className={`p-1 ${styles.figIconStyle}`}>
            <Icon size={52} />
          </figure>
          <h2 className="sharedTitle fs-1 user-select-none">{title}</h2>
          <h4 className="fs-5 user-select-none">{description}</h4>
          <div className={`${styles.iconsDev}`}>
            <IconsGetComponent getIconsList={getIconsList} category={title} />
          </div>
        </section>
      ))}
    </>
  );
};
