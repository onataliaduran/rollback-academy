import React from "react";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ img, title, description, price }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default ItemDetail;
