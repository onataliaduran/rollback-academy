import React from "react";
import styles from "./CartWidget.module.css";
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = ({ totalProducts }) => {
  return (
    <div className={styles.cart___container}>
      <FiShoppingCart />
      {totalProducts > 0 && (
        <div className={styles.cart___bubble}>
          <p className={styles.cart___number}>{totalProducts}</p>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
