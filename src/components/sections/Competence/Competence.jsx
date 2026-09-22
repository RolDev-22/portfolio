import styles from "./Competence.module.css";
import { ServicesGetComponent } from "@ui/ServiceGetComponent";
import { SkillsGetComponent } from "@ui/SkillsGetComponent";

export default function Competence({
  getIconsList,
  getServicesList,
  getSkillsList,
}) {
  return (
    <section
      id="skill"
      className=" px-0 pt-5 container-fluid d-flex flex-column justify-content-start align-items-center">
      <section className="container-fluid d-flex flex-column flex-md-row col-11 m-0 p-0">
        <SkillsGetComponent
          getSkillsList={getSkillsList}
          getIconsList={getIconsList}
        />
      </section>
      <section className={`container-fluid d-flex flex-column col-11 m-0 p-1`}>
        <h2 className="apperEffect sharedTitle user-select-none fs-2">
          <span className={`${styles.decorativeSpan}`}>Ser</span>vicios
        </h2>
        <div className="d-flex flex-wrap justify-content-evenly align-items-center p-1 gap-2">
          <ServicesGetComponent getServicesList={getServicesList} />
        </div>
      </section>
    </section>
  );
}
