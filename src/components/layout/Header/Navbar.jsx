import styles from "./Navbar.module.css";
import { FaDownload } from "react-icons/fa6";

export const Navbar = ({ setIsMenuOpen }) => {
  return (
    <nav className=" container-fluid d-flex  px-0 m-0 h-100">
      <ul className=" d-flex flex-column flex-lg-row w-100 h-100 m-0 px-0 justify-content-evenly align-items-center">
        <li className={`${styles.liNavbar} p-1`}>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Sobre Mi
          </a>
        </li>
        <li className={`${styles.liNavbar} p-1`}>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Proyectos
          </a>
        </li>
        <li className={`${styles.liNavbar} p-1`}>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Habilidades
          </a>
        </li>
        <li className={`${styles.liNavbar} p-1`}>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </a>
        </li>
        <li className={`${styles.liNavbarC} p-1`}>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Curriculum <FaDownload />
          </a>
        </li>
      </ul>
    </nav>
  );
};
