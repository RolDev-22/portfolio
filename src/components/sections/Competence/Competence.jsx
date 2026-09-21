import styles from "./Competence.module.css";
import { BsLayersHalf } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { VscDeveloperTools } from "react-icons/vsc";
import { IconsGetComponent } from "@/components/ui/IconsGetComponent";
import { TbWorld } from "react-icons/tb";
import { RiAlignItemVerticalCenterFill } from "react-icons/ri";
import { AiOutlineAudit } from "react-icons/ai";
import { SiDwavesystems } from "react-icons/si";
import { FaRegFileCode } from "react-icons/fa6";
import { GrDocumentPerformance } from "react-icons/gr";

export default function Competence({ getIconsList }) {
  return (
    <section
      id="skill"
      className=" px-0 pt-5 container-fluid d-flex flex-column justify-content-start align-items-center">
      <section className="container-fluid d-flex flex-column flex-md-row col-11 m-0 p-0">
        <section
          className={`apperEffect ${styles.targetStyle} d-flex flex-column col-12 col-md-4 p-1 m-0 gap-1 justify-content-center align-items-center text-center`}>
          <figure className={`p-1 ${styles.figIconStyle}`}>
            <BsLayersHalf />
          </figure>
          <h2 className="sharedTitle fs-1 user-select-none">Diseño</h2>
          <h4 className="fs-5 user-select-none">
            Prototipado, sistemas de diseño y arquitectura de experiencia (UX).
          </h4>
          <div className={`${styles.iconsDev}`}>
            <IconsGetComponent
              getIconsList={getIconsList}
              category={"design"}
            />
          </div>
        </section>
        <section
          className={`apperEffect ${styles.targetStyle} d-flex flex-column col-12 col-md-4 p-1 m-0 gap-1 justify-content-center align-items-center text-center`}>
          <figure className={`p-1 ${styles.figIconStyle}`}>
            <AiFillCode />
          </figure>
          <h2 className="sharedTitle fs-1 user-select-none">Desarrollo</h2>
          <h4 className="fs-5 user-select-none">
            Maquetación moderna, lógica interactiva y optimización web.
          </h4>
          <div className={`${styles.iconsDev}`}>
            <IconsGetComponent
              getIconsList={getIconsList}
              category={"developer"}
            />
          </div>
        </section>
        <section
          className={`apperEffect ${styles.targetStyle} d-flex flex-column col-12 col-md-4 p-1 m-0 gap-1 justify-content-center align-items-center text-center`}>
          <figure className={`p-1 ${styles.figIconStyle}`}>
            <VscDeveloperTools />
          </figure>
          <h2 className="sharedTitle fs-1 user-select-none">Herramientas</h2>
          <h4 className="fs-5 user-select-none">
            Software, tecnologías y control de versiones de nivel profesional.
          </h4>
          <div className={`${styles.iconsDev}`}>
            <IconsGetComponent getIconsList={getIconsList} category={"tool"} />
          </div>
        </section>
      </section>
      <section className={`container-fluid d-flex flex-column col-11 m-0 p-1`}>
        <h2 className="apperEffect sharedTitle user-select-none fs-2">
          <span className={`${styles.decorativeSpan}`}>Ser</span>vicios
        </h2>
        <div className="d-flex flex-wrap justify-content-evenly align-items-center p-1 gap-2">
          <article className="apperEffect rounded-5 d-flecolumnex-wrap col-12 col-md-3 text-center justify-content-center align-items-center p-2">
            <figure>
              <TbWorld size={72} />
            </figure>
            <h2 className="fs-4">Desarrollo de Landing Pages & Sitios Web</h2>
            <p className="fs-6">
              Sitios web a medida, ultrarrápidos y optimizados para destacar la
              identidad de tu marca y convertir visitantes en clientes.
            </p>
          </article>
          <article className="apperEffect d-flex flex-column col-12 col-md-3 text-center justify-content-center align-items-center p-2">
            <figure>
              <RiAlignItemVerticalCenterFill size={72} />
            </figure>
            <h2 className="fs-4">Creación de Productos / MVPs</h2>
            <p className="fs-6">
              Transformación de ideas en aplicaciones web funcionales y
              probadas, listas para salir al mercado en tiempo récord.
            </p>
          </article>
          <article className="apperEffect d-flex flex-column col-12 col-md-3 text-center justify-content-center align-items-center p-2">
            <figure>
              <AiOutlineAudit size={72} />
            </figure>
            <h2 className="fs-4">Rediseño & Auditoría UX/UI</h2>
            <p className="fs-6">
              Diagnóstico y modernización de plataformas existentes para
              corregir problemas de usabilidad e incrementar la retención.
            </p>
          </article>
          <article className="apperEffect d-flex flex-column col-12 col-md-3 text-center justify-content-center align-items-center p-2">
            <figure>
              <SiDwavesystems size={72} />
            </figure>
            <h2 className="fs-4">Creación de Design Systems</h2>
            <p className="fs-6">
              Construcción de librerías de componentes UI escalables que
              conectan tu diseño en Figma directamente con tu código en React.
            </p>
          </article>
          <article className="apperEffect d-flexcolumnx-wrap col-12 col-md-3 text-center justify-content-center align-items-center p-2">
            <figure>
              <FaRegFileCode size={72} />
            </figure>
            <h2 className="fs-4">Conversión de Figma a Código</h2>
            <p className="fs-6">
              Maquetación exacta de tus diseños visuales a código frontend
              limpio, semántico, accesible y 100% responsivo.
            </p>
          </article>
          <article className="apperEffect d-flecolumnex-wrap col-12 col-md-3 text-center justify-content-center align-items-center p-2">
            <figure>
              <GrDocumentPerformance size={72} />
            </figure>
            <h2 className="fs-4">Optimización & Performance Web</h2>
            <p className="fs-6">
              Corrección de errores, mejora de tiempos de carga y adaptación
              técnica para ofrecer una navegación fluida en cualquier
              dispositivo.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
