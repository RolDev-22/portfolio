import styles from "./Contact.module.css";
import { FormContact } from "@ui/Form/FormContact";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="sharedClass position-relative px-0 container-fluid d-flex flex-column justify-content-center align-items-center">
      <h2 className="apperEffect sharedTitle m-0 mt-5">Contactame</h2>
      <section
        className={`${styles.containerStyleContact} container-fluid d-flex flex-column flex-md-row col-12 col-md-11 p-1 rounded-2`}>
        <div className="container-fluid order-2">
          <div className="apperEffect sharedSelect container-fluid colo-12 p-1 m-0 order-md-1">
            <h2>¡Hablemos!</h2>
            <p className={`${styles.textContact}`}>
              Estoy aquí para responder tus dudas y escuchar tus ideas
            </p>
          </div>
          <FormContact />
        </div>
        <div
          className={`apperEffect ${styles.infoContactStyle} container-fluid d-flex flex-column align-items-center order-md-2 rounded-2 justify-content-center`}>
          <div className="sharedSelect d-flex flex-column gap-0 gap-gap-md-3">
            <h2 className=" sharedSelect ">Contacto</h2>
            <ul className=" p-0 m-0 d-flex flex-column gap-0 gap-md-3">
              <li className="d-flex flex-row align-items-center gap-3">
                <FaMapMarkedAlt /> Costa Rica, Puntarenas
              </li>
              <li className="d-flex flex-row align-items-center gap-3">
                <MdOutlineAlternateEmail />{" "}
                <a href="mailto:rolandomurilloaguirre22@gmail.com">
                  rolandomurilloaguirre22@gmail.com
                </a>
              </li>
              <li className="d-flex flex-row align-items-center gap-3">
                <FaPhone /> 8883 - 03 - 53
              </li>
            </ul>
          </div>
          <figure className="apperEffectDown d-flex flex-row gap-5 mt-0 mt-md-5">
            <a
              target="_blank"
              className={`${styles.iconsSocial}`}
              href="https://github.com/RolDev-22">
              <FaSquareGithub />
            </a>
            <a
              target="_blank"
              className={`${styles.iconsSocial}`}
              href="https://www.linkedin.com/in/rolando-ma/">
              <FaLinkedin />
            </a>
          </figure>
        </div>
      </section>
    </section>
  );
}
