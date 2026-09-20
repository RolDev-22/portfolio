import img_Contact from "@assets/img-contact.png";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className="sharedClass px-0 container-fluid d-flex flex-column justify-content-center align-items-center">
      <h2 className="sharedTitle m-0">Contactame</h2>
      <section className="p-1 container-fluid d-flex flex-column flex-md-row col-md-7">
        <div className="container-fluid">
          <div className="container-fluid colo-12 p-1 m-0 order-md-1">
            <h2>¡Hablemos!</h2>
            <p className={`${styles.textContact} `}>
              Estoy aquí para responder tus dudas y escuchar tus ideas
            </p>
          </div>
          <form
            action=""
            className={`${styles.formStyle} p-2 m-0 d-flex flex-column gap-2 rounded-3 col-12`}>
            <div className="container d-flex flex-column">
              <label htmlFor="inptName">Nombre</label>
              <input
                className="form-control shadow-none"
                type="text"
                name="inptName"
                id="inptName"
              />
            </div>
            <div className="container d-flex flex-column">
              <label htmlFor="inptMail">Correo</label>
              <input
                className="form-control shadow-none"
                type="email"
                name="inptMail"
                id="inptMail"
              />
            </div>
            <div className="container d-flex flex-column">
              <label htmlFor="inptMessage">Mensaje</label>
              <textarea
                className={`${styles.textAreaForm} form-control shadow-none`}
                name="inptMessage"
                id="inptMessage"></textarea>
            </div>
            <div className="container d-flex gap-2">
              <input type="checkbox" name="inptCheck" id="inptCheck" />
              <label htmlFor="inptCheck">
                Consentimiento acuerdo requerido
              </label>
            </div>
            <div className="container d-flex justify-content-center">
              <button className="btn btn-outline-info w-75">Enviar</button>
            </div>
          </form>
        </div>
        <div className="bg-primary container-fluid">
          <div className="infoContact">
            <figure
              className={`${styles.figureContact} container-fluid col-5 m-0 d-none d-md-flex`}>
              <img
                className="img-fluid"
                src={img_Contact}
                alt="imagen seccion contacto"
              />
            </figure>
            INFO-CONTAT
          </div>
          <figure className="mapContact">MAP</figure>
        </div>
      </section>
    </section>
  );
}
