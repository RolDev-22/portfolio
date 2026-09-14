import styles from "./Hero.module.css";
import perfilImage from "@assets/prfl-about.png";
import { BtnComponent } from "@/components/ui/BtnComponent";

export default function Hero() {
  return (
    <section className="px-0 pt-5 container-fluid d-flex flex-column justify-content-center align-items-center">
      <div
        className={`d-flex flex-column align-items-center p-1 w-75 rounded-4 ${styles.heroContent}`}>
        <article className=" flex-grow-1 w-100 d-flex flex-column align-items-center text-center">
          <h2 className={styles.title}>Hola, soy Rolando</h2>
          <figure className={`h-100 m-0 p-1 ${styles.imgPerfil}`}>
            <img src={perfilImage} alt="Image-perfil" className="img-fluid" />
          </figure>
        </article>
        <p className={`${styles.description} text-center m-0 col-12 col-md-10`}>
          Diseñador UI/UX Y Desarrollador Web apasionado por crear interfaces
          intuitivas
        </p>
        <div className="d-flex flex-column flex-md-row w-100 p-3 gap-3 gap-md-5 align-items-center justify-content-center">
          <BtnComponent name={"Mis Projectos"} type="special" />
          <BtnComponent name={"Contactame"} type="primary" />
        </div>
      </div>
    </section>
  );
}
