import React from "react";
import styles from "./CourseDetail.module.css";

export const CourseDetail = ({ details }) => {
  return (
    <div className={styles.details__grid}>
      <div className={styles.details__imgCont}>
        <img
          src={details.img}
          alt={details.title}
          className={styles.details__img}
        />
      </div>
      <div>
        <h1 className={styles.details__title}>{details.title} </h1>
        <p className={styles.details__price}>{details.price}</p>
        <p className={styles.details__description}>{details.description}</p>
        <button className={styles.btn__buy}>Buy now</button>
      </div>
    </div>
  );
};

export default CourseDetail;
