import styles from "./Competence.module.css";
import { BsLayersHalf } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { VscDeveloperTools } from "react-icons/vsc";

export default function Competence() {
  return (
    <section
      id="skill"
      className="sharedClass px-0 pt-5 container-fluid d-flex flex-column  justify-content-center align-items-center">
      <section className="container-fluid d-flex flex-column flex-md-row col-11 m-0 p-0 ">
        <section
          className={`apperEffect ${styles.targetStyle} d-flex flex-column col-12 col-md-4 p-1 m-0 rounded-top-3 rounded-md-start-3 justify-content-center align-items-center`}>
          <figure className={`p-1 ${styles.figIconStyle}`}>
            <BsLayersHalf />
          </figure>
          <h2 className="sharedTitle">Diseño</h2>
          <h4>Description</h4>
          <div>icons</div>
        </section>
        <section
          className={`apperEffect ${styles.targetStyle} d-flex flex-column col-12 col-md-4 p-1 m-0 justify-content-center align-items-center`}>
          <figure className={`p-1 ${styles.figIconStyle}`}>
            <AiFillCode />
          </figure>
          <h2 className="sharedTitle">Desarrollo</h2>
          <h4>Description</h4>
          <div>icons</div>
        </section>
        <section
          className={`apperEffect ${styles.targetStyle} d-flex flex-column col-12 col-md-4 p-1 m-0 rounded-bottom-3  rounded-md-end-3 justify-content-center align-items-center`}>
          <figure className={`p-1 ${styles.figIconStyle}`}>
            <VscDeveloperTools />
          </figure>
          <h2 className="sharedTitle">Herramientas</h2>
          <h4>Description</h4>
          <div>icons</div>
        </section>
      </section>
      <section>services</section>
    </section>
  );
}
