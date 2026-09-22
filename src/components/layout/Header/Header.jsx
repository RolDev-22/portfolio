import styles from "./Header.module.css";
import { Navbar } from "@layout/Header/Navbar/Navbar";
import { useState } from "react";
import { LogoComponent } from "@/components/ui/LogoComponent";

export default function Header({ scrollControl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollNow = scrollControl();

  return (
    <header
      style={{ height: "60px" }}
      className={`fadeInUp ${styles.header} ${scrollNow > 100 ? "blurHeaderControl" : ""}  container-fluid d-flex flex-row position-fixed top-0 start-0 px-0 justify-content-center justify-content-lg-between align-items-center`}>
      <section
        className={`d-flex flex-row z-1 col-12 col-lg-4 h-100 justify-content-between align-items-center`}>
        <div className={`d-flex flex-grow-1 p-0`}>
          <LogoComponent setIsMenuOpen={setIsMenuOpen} />
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
        <Navbar setIsMenuOpen={setIsMenuOpen} scrollValue={scrollControl} />
      </section>
    </header>
  );
}
