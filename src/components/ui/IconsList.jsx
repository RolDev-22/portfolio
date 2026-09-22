import styles from "./UiStyles.module.css";

export const IconsGetComponent = ({ getIconsList, category }) => {
  return (
    <div className="d-flex flex-wrap p-1 gap-3 justify-content-center align-items-center">
      {getIconsList([category]).map(({ name, Icon }) => (
        <div
          key={name}
          className={`${styles.icStyle} d-flex flex-column justify-content-center align-items-center`}>
          <Icon size={30} />
          <span className="text-capitalize user-select-none">{name}</span>
        </div>
      ))}
    </div>
  );
};
