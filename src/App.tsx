import { FC } from "react";
import styles from "./App.module.css";
import img from "./background.svg";

const App: FC = () => {
  console.log(img);
  return (
    <div className={styles.wrapper}>
      <h1>Adam Phi Vô</h1>
      <h3>©2025</h3>
    </div>
  );
};

export default App;
