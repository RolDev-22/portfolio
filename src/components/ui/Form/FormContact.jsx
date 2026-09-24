import { useState, useRef } from "react";
import { Loading } from "@ui/Loading/Loading";
import { mailJsService } from "@services/mailJsService";

export const FormContact = () => {
  const [constCheck, setConstCheck] = useState(false);
  const [activeLoading, setActiveLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef(null);

  const sendData = async (event) => {
    event.preventDefault();
    setMessage(null);
    setActiveLoading(true);

    const name = nameRef.current.value;
    const mail = mailRef.current.value;
    const msg = messageRef.current.value;

    if (name !== "" && mail !== "" && msg !== "") {
      const response = await mailJsService({
        name: name,
        mail: mail,
        message: msg,
      });

      console.log("Status respuesta:", response);

      if (response === 200) {
        formRef.current.reset();
        setMessage("MENSAJE ENVIADO EXITOSAMENTE ¡GRACIAS POR ESCRIBIRME!");
        setTimeout(() => {
          setActiveLoading(false);
        }, 3000);
      } else {
        setMessage("NO SE PUDO ENVIAR EL MENSAJE");
        setTimeout(() => {
          setActiveLoading(false);
        }, 3000);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={sendData}
        ref={formRef}
        autoComplete="off"
        action="#"
        className=" p-2 m-0 d-flex flex-column gap-2 rounded-3 col-12">
        <Loading active={activeLoading} message={message} />
        <div className="apperEffectDown container d-flex flex-column">
          <label htmlFor="inptName">Nombre</label>
          <input
            className="form-control shadow-none"
            type="text"
            name="inptName"
            id="inptName"
            ref={nameRef}
            required
          />
        </div>
        <div className="container d-flex flex-column">
          <label htmlFor="inptMail">Correo</label>
          <input
            className="form-control shadow-none"
            type="email"
            name="inptMail"
            id="inptMail"
            ref={mailRef}
            required
          />
        </div>
        <div className="container d-flex flex-column">
          <label htmlFor="inptMessage">Mensaje</label>
          <textarea
            className="textAreaForm form-control shadow-none"
            name="inptMessage"
            id="inptMessage"
            ref={messageRef}
            required></textarea>
        </div>
        <div className="container d-flex gap-2 sharedSelect">
          <input
            type="checkbox"
            name="inptCheck"
            id="inptCheck"
            onChange={(e) => setConstCheck(e.target.checked)}
          />
          <label htmlFor="inptCheck">Consentimiento acuerdo requerido</label>
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <button
            type="submit"
            className="btn btn-outline-info w-75"
            disabled={!constCheck}>
            Enviar
          </button>
          {!constCheck && (
            <p className={`${!constCheck ? "fadeInActive" : ""}`}>
              Debe de marcar el consentimiento
            </p>
          )}
        </div>
      </form>
    </>
  );
};
