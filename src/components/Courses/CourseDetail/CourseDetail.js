import React, { useState } from "react";
import styles from "./CourseDetail.module.css";
import CounterContainer from "../../../containers/CounterContainer/CounterContainer";

export const CourseDetail = ({ details }) => {
  const [stateItem, setStateItem] = useState(0);
  const onAdd = (number) => setStateItem(number);
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
        <CounterContainer onAdd={onAdd} />
      </div>
    </div>
  );
};

export default CourseDetail;
