import styles from "./FormContact.module.css";

export const FormContact = () => {
  return (
    <form
      action=""
      className=" p-2 m-0 d-flex flex-column gap-2 rounded-3 col-12">
      <div className="apperEffectDown container d-flex flex-column">
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
          className="textAreaForm form-control shadow-none"
          name="inptMessage"
          id="inptMessage"></textarea>
      </div>
      <div className="container d-flex gap-2 sharedSelect">
        <input type="checkbox" name="inptCheck" id="inptCheck" />
        <label htmlFor="inptCheck">Consentimiento acuerdo requerido</label>
      </div>
      <div className="container d-flex justify-content-center">
        <button className="btn btn-outline-info w-75">Enviar</button>
      </div>
    </form>
  );
};
