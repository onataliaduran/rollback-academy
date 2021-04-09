import React from "react";
import styles from "./Item.module.css";

const Item = ({ title, price }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>${price}</p>
      <button className={styles.btn}>Add to cart</button>
    </div>
  );
};

export default Item;
