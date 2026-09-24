import emailjs from "@emailjs/browser";
const EMAILJS_KEY = import.meta.env.VITE_EMAILJS_KEY;
const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const mailJsService = ({ name, mail, message }) => {
  const dataSend = {
    title: "Consulta Portfolio Web",
    name: name,
    email: mail,
    message: message,
  };

  emailjs.init({
    publicKey: EMAILJS_KEY,
  });

  return emailjs
    .send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, dataSend)
    .then((response) => {
      return response.status;
    })
    .catch((error) => {
      return error.text || error.message;
    });
};
