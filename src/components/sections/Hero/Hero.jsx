import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles.heroContainer}`}>
      <h1 className={styles.title}>Hola, soy Rolando</h1>
      <p className={styles.subtitle}>
        Diseñador UI/UX Y Desarrollador Web apasionado por crear interfaces
        intuitivas
      </p>
    </section>
  );
}
