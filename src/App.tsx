import { FC } from "react";
import styles from "./App.module.css";
import bg from "./bg.jpg";

const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className={styles.border}></div>
      <h1>Adam Phi Vô</h1>
      <h2>web developer</h2>
      <h3>coming soon</h3>
    </div>
  );
};

export default App;
