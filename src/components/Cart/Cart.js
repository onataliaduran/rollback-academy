import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";

const Cart = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [cart, addItem, isInCart, removeItem, deleteAll] = useContext(
    CartContext
  );

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cart.map((itemInCart) => {
        return (
          <div key={itemInCart.item.id}>
            <span>x{itemInCart.quantity}</span>
            <span> {itemInCart.item.title} Course</span>
            <button
              className={styles.btn}
              onClick={() => removeItem(itemInCart.item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button className={styles.btn} onClick={deleteAll}>
        Clear All
      </button>
    </div>
  );
};

export default Cart;
