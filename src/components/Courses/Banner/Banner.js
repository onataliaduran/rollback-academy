import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ categoryHeader }) => {
  return (
    <div className={styles.header__container}>
      <h1>{categoryHeader}</h1>
    </div>
  );
};

export default Banner;
