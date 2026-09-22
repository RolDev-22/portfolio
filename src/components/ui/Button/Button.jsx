import styles from "./Button.module.css";
import { ROUTES } from "@constants/routes";

export const Button = ({
  name,
  type = "primary",
  reference = "#",
  particularClass = "",
}) => {
  function handleRoute(id) {
    return ROUTES[id];
  }

  return (
    <a
      className={`${[particularClass]} container-fluid d-flex col-12 col-md-5 col-lg-4`}
      href={handleRoute(reference)}>
      <button
        className={`border-1 p-2 rounded-5 w-100 ${styles.general} ${styles[type]}`}>
        {name}
      </button>
    </a>
  );
};
