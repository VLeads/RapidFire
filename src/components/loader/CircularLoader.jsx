import React from "react";
import styles from "./loader.module.css";

export const CircularLoader = () => {
  return (
    <div className={styles.center}>
      <div className={styles.loader}></div>
    </div>
  );
};
