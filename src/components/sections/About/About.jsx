import imgAbout from "@assets/img-about.png";
import styles from "./About.module.css";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="sharedClass px-0 pt-5 container-fluid d-flex flex-column flex-lg-row justify-content-center align-items-center">
      <section className="gap-2 gap-md-2 gap-lg-3 order-2 order-lg-1 col-11 col-md-8 col-lg-5 d-flex flex-column justify-content-center align-items-center ">
        <h2 className="sharedTitle m-0">Conóceme</h2>
        <h4 className="sharedDescription text-center m-0">
          Rolando Murillo | UX/UI Diseñador y Desarrollador Web
        </h4>
        <h2 className="sharedTitle text-center m-0">¡Hola! Soy Rolando</h2>
        <p className={`p-2 m-0 ${styles.paragraphAbout}`}>
          Una excelente opción si deseas un diseño digital llamativo, moderno y
          professional, Soy un desarrollador Front-End con más de 3 años de
          trayectoria. Me encanta crear soluciones que involucran creatividad y
          funcionalidad. Es primordial diseñar interfaces intuitivas y que
          impacten positivamente. Mi enfoque se centra en el diseño centrado en
          los requerimeintos del cliente, investigación de usuarios y desarrollo
          web moderno, para nuevos desafios.
        </p>
        <div className="pb-2 d-flex container-fluid justify-content-evenly align-items-center">
          <a
            className={`d-flex justify-content-center p-1 rounded-1 ${styles.iconsSocial}`}
            href="https://github.com/RolDev-22"
            target="blanck">
            <FaSquareGithub />
          </a>
          <a
            className={`d-flex justify-content-center p-1 rounded-1 ${styles.iconsSocial}`}
            href="https://www.linkedin.com/in/rolando-ma/"
            target="black">
            <FaLinkedin />
          </a>
        </div>
      </section>
      <section className="order-1 order-lg-2 col-11 col-md-8 col-lg-5 d-flex justify-content-center align-items-center ">
        <figure className={`${styles.figureAbout}`}>
          <img className="img-fluid" src={imgAbout} alt="" />
        </figure>
      </section>
    </section>
  );
}
