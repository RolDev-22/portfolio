import styles from "./header.module.css";
const Header = () => {
  return (
    <>
      <header
        className={`${styles.headerStyle} navbar navbar-expand-lg container-fluid d-flex row h-25 row col-12 col-lg-11 justify-content-center gap-2`}>
        <button
          className="navbar-toggler col-1 order-1 order-lg-1 p-1 border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <nav
          className="collapse navbar-collapse col-lg-6 order-4 order-lg-2"
          id="navbarContent">
          <ul
            className={`${styles.menuOptions} navbar-nav container-fluid d-flex gap-5 align-items-center justify-content-center gap-lg-3`}>
            <li>
              <a className={`${styles.option} p-1`} href="#home">
                Inicio
              </a>
            </li>
            <li>
              <a className={`${styles.option} p-1`} href="#about">
                Sobre Mi
              </a>
            </li>
            <li>
              <a className={`${styles.option} p-1`} href="#skills">
                Habilidades
              </a>
            </li>
            <li>
              <a className={`${styles.option} p-1`} href="#contact">
                Contacto
              </a>
            </li>
            <li>
              <a className={`${styles.btnCv} d-flex gap-2`} href="#">
                Resumen
                <i className={`${styles.ic} bi bi-arrow-bar-down`}></i>
              </a>
            </li>
          </ul>
        </nav>

        <article className="d-flex container-fluid col-5 col-md-8 col-lg-3 order-2 order-lg-2 justify-content-center justify-content-lg-start">
          <a className={`${styles.brand} navbar-brand`} href="#">
            <img
              src="/logo__.png"
              alt="logo RolDev-22"
              width="130"
              height="30"
              className="d-flex"
            />
          </a>
        </article>

        <article className="d-flex col-3 col-md-2 col-lg-2 order-3 order-lg-3 justify-content-center">
          <img
            src="/img-pfl-.png"
            alt="logo RolDev-22"
            width="50"
            height="50"
            className="d-inline-block align-items-center me-1 rounded-5 bg-body"
          />
        </article>
      </header>
    </>
  );
};

export default Header;
