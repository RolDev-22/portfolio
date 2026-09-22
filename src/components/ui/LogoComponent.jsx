import styles from "./UiStyles.module.css";
import logo from "@assets/log.png";

export const LogoComponent = ({ setIsMenuOpen }) => {
  return (
    <a
      onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      href="#home"
      className={`d-flex flex-row justify-content-center align-items-center`}>
      <figure className={`h-100 m-0 ${styles.logo}`}>
        <img src={logo} alt="logo-page" className="img-fluid" />
      </figure>
      <h1 className={`m-0 d-none d-md-block ${styles.titleLogo}`}>
        Rolando Murillo
      </h1>
    </a>
  );
};
