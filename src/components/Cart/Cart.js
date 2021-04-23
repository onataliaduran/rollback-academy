import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = ({ total }) => {
  const { cart, removeItem, deleteAll } = useContext(CartContext);

  return (
    <div>
      <h1>Your Shopping Cart</h1>

      {!cart.length > 0 && (
        <div className={styles.msjCont}>
          <p className={styles.msjtxt}>You haven't added any course yet</p>
          <Link to="/">
            <button className={styles.btn}>Keep searching</button>
          </Link>
        </div>
      )}

      <div className={styles.cart__grid}>
        <div>
          {cart.map((itemInCart) => {
            return (
              <div className={styles.product} key={itemInCart.item.id}>
                <img
                  className={styles.thumbnail}
                  src={itemInCart.item.img}
                  alt={itemInCart.item.title}
                />
                <div>
                  <span>x{itemInCart.quantity}</span>
                  <span> {itemInCart.item.title} Course</span>
                  <button
                    className={styles.btn}
                    onClick={() => removeItem(itemInCart.item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div>
            {total > 0 && (
              <div>
                <h2>Total</h2>
                <p className={styles.total}>${total}</p>
              </div>
            )}
          </div>
          <div>
            {cart.length > 0 && (
              <button className={styles.btn} onClick={deleteAll}>
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
