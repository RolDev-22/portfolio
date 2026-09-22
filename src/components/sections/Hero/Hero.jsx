import styles from "./Hero.module.css";
import perfilImage from "@assets/prfl-about.png";
import { Button } from "@ui/Button/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="sharedClass px-0 pt-5 container-fluid d-flex flex-column justify-content-center align-items-center">
      <div
        className={`col-11 col-md-8 container-fluid d-flex p-1 ${styles.wrapperHero}`}>
        <div
          className={`d-flex flex-column align-items-center p-1 w-100 rounded-4 ${styles.heroContent}`}>
          <article className=" flex-grow-1 w-100 d-flex flex-column flex-md-row justify-content-md-center align-items-center text-center">
            <figure className={`fadeInLeft h-100 m-0 p-1 ${styles.imgPerfil}`}>
              <img src={perfilImage} alt="Image-perfil" className="img-fluid" />
            </figure>
            <h2 className="fadeInUp sharedTitle">Hola, soy Rolando</h2>
          </article>
          <p className="fadeInDown sharedDescription text-center m-0 col-12 col-md-10">
            Diseñador UI/UX Y Desarrollador Web apasionado por crear interfaces
            intuitivas
          </p>
          <div className="d-flex flex-column flex-md-row w-100 p-3 gap-3 gap-md-5 align-items-center justify-content-center">
            <Button
              name={"Mis Projectos"}
              type="special"
              reference="3"
              particularClass="fadeInLeft"
            />
            <Button
              name={"Contactame"}
              type="primary"
              reference="5"
              particularClass="fadeInRight"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
