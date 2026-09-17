import styles from "./UiStyles.module.css";
import { ROUTES } from "@constants/routes";

export const BtnComponent = ({ name, type = "primary", reference = "#" }) => {
  function handleRoute(id) {
    return ROUTES[id];
  }

  return (
    <a
      className="container-fluid d-flex col-12 col-md-5 col-lg-4"
      href={handleRoute(reference)}>
      <button
        className={`border-1 p-2 rounded-5 w-100 ${styles.general} ${styles[type]}`}>
        {name}
      </button>
    </a>
  );
};
