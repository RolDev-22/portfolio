import styles from "./UiStyles.module.css";

export const BtnComponent = ({ name, type = "primary" }) => {
  return (
    <button
      className={`border-1 p-2 rounded-2 col-12 col-md-5 ${styles.general} ${styles[type]}`}>
      {name}
    </button>
  );
};
