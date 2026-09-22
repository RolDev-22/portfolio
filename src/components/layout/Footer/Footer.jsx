import { Logo } from "@ui/Logo/Logo";
import styles from "./Footer.module.css";
import { SiDevbox } from "react-icons/si";
import { FaDigitalOcean } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { IoLogoFigma } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="apperEffectDown overflow-hidden">
      <section
        className={`p-1 d-flex flex-column flex-md-row justify-content-center align-items-strecht ${styles.sectionFooterStyles}`}>
        <div className="p-1 d-flex flex-column col-12 col-md-4 justify-content-center align-items-center">
          <Logo />
          <p className="text-center p-1">
            Desarollador Web con amplia experiencia en interfaces elegantes y
            funcionales. Hagamos realidad tu próximo proyecto
          </p>
        </div>

        <div className="p-1 d-flex flex-column p-1 col-12 col-md-4 align-items-center jus">
          <h5>Especialidades</h5>
          <ul className="d-flex flex-wrap gap-2 align-items-stretch justify-content-center">
            <li>
              <SiDevbox /> Desarrollo Web |
            </li>
            <li>
              <FaDigitalOcean /> Estrategia Digital |
            </li>
            <li>
              <MdLeaderboard /> Liderazgo Técnico |
            </li>
            <li>
              <IoLogoFigma /> Diseño (UI/UX)
            </li>
          </ul>
        </div>

        <div className="p-1 d-flex flex-column col-12 col-md-4 align-items-center">
          <h5>Contacto Personal</h5>
          <ul className="p-0 m-0 d-flex flex-column ">
            <li>
              <MdOutlineAlternateEmail />{" "}
              <a href="mailto:rolandomurilloaguirre22@gmail.com">
                rolandomurilloaguirre22@gmail.com
              </a>
            </li>
            <li>
              <FaPhone /> 8883 - 03 - 53
            </li>
          </ul>
        </div>
      </section>
      <section className="text-center">
        <p className={`${styles.copyright}`}>
          © 2026 Rolando Murillo. Todos los derechos reservados.
        </p>
      </section>
    </footer>
  );
}
