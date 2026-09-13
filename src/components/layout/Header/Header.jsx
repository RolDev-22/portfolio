import logo from "@assets/log.png";
import styles from "./Header.module.css";
import { Navbar } from "./Navbar";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      style={{ height: "60px" }}
      className={`container-fluid d-flex flex-row position-fixed top-0 start-0 px-0 justify-content-center justify-content-lg-between align-items-center`}>
      <section
        className={`d-flex flex-row z-1 col-12 col-lg-4 h-100 justify-content-between align-items-center`}>
        <div className={`d-flex flex-grow-1 p-0`}>
          <a
            href="#"
            className={`d-flex flex-row justify-content-center align-items-center`}>
            <figure className={`h-100 m-0 ${styles.logo}`}>
              <img src={logo} alt="logo-page" className="img-fluid" />
            </figure>
            <h1 className={`m-0 d-none d-md-block ${styles.titleLogo}`}>
              Rolando Murillo
            </h1>
          </a>
        </div>
        <div className={`d-flex flex-grow-1 p-1 justify-content-end`}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${styles.navbarTogglerBtn} ${isMenuOpen ? styles.activeBtn : ""} border-0 bg-transparent d-flex d-lg-none justify-content-center align-items-center`}>
            <span className={`${styles.navbarToggler}`}></span>
          </button>
        </div>
      </section>
      <section
        className={` d-flex flex-grow-1 col-12 col-lg-6 justify-content-center ${styles.navbar} ${isMenuOpen ? styles.activeNav : ""}`}>
        <Navbar setIsMenuOpen={setIsMenuOpen} />
      </section>
    </header>
  );
}
