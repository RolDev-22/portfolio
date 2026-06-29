import styles from "./pages.module.css";
import Header from "@components/header/Header";

export default function Home() {
  return (
    <div
      className={`${styles.shareStyle} container-fluid d-flex justify-content-center align-content-center p-1`}>
      <Header />
    </div>
  );
}
