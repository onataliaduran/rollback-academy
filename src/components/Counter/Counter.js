import React from "react";
import styles from "./Counter.module.css";

const Counter = ({
  counter,
  addHandler,
  removeHandler,
  buyEnabled,
  add,
  txtBtn,
}) => {
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
        <button className={styles.btn__outline} onClick={add}>
          {txtBtn}
        </button>
      )}
    </div>
  );
};

export default Counter;
