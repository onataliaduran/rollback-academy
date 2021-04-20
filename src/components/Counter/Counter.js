import React from "react";
import styles from "./Counter.module.css";
import { Link } from "react-router-dom";

const Counter = ({ counter, addHandler, removeHandler, buyEnabled, add }) => {
  return (
    <div>
      <span>Quantity</span>
      <span className={styles.counter}>{counter}</span>
      <div>
        <button className={styles.btn} onClick={removeHandler}>
          Remove
        </button>
        <button className={styles.btn} onClick={addHandler}>
          Add
        </button>
      </div>
      {buyEnabled && (
        <Link to="/cart">
          <button className={styles.btn__outline} onClick={add}>
            Terminar mi compra
          </button>
        </Link>
      )}
    </div>
  );
};

export default Counter;
