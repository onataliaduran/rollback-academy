import styles from "./Cart.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../../context/CartContext";
import Counter from "../Counter/Counter";

const Cart = ({ total }) => {
  const { cart, removeItem, deleteAll } = useContext(CartContext);
  console.log("CAAAR", cart);

  return (
    <div>
      <h1 className={styles.cart__title}>Your Shopping Cart</h1>

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
              <>
                <div className={styles.cart__product} key={itemInCart.item.id}>
                  <img
                    className={styles.thumbnail}
                    src={itemInCart.item.img}
                    alt={itemInCart.item.title}
                  />
                  <div className={styles.product__info}>
                    <p className={styles.product__title}>
                      {itemInCart.item.title} Course
                    </p>
                    <div className={styles.product__counter}>
                      <Counter initialValue={itemInCart.quantity} />
                    </div>
                    <p className={styles.product__price}>
                      ${itemInCart.item.price * itemInCart.quantity}
                    </p>
                    <button
                      className={styles.btn}
                      onClick={() => removeItem(itemInCart.item.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </>
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
              <>
                <button className={styles.btn} onClick={deleteAll}>
                  Clear All
                </button>
                <Link to="/checkout">
                  <button className={styles.btn}>Checkout</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
