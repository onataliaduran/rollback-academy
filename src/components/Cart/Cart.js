import styles from "./Cart.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import SelectedCourses from "../Courses/SelectedCourses/SelectedCourses";

const Cart = ({ total }) => {
  const { cart, deleteAll } = useContext(CartContext);

  return (
    <div className={styles.cart__container}>
      <h1 className={styles.cart__title}>Your Shopping Cart</h1>

      {!cart.length > 0 ? (
        <div className={styles.msjCont}>
          <p className={styles.msjtxt}>You haven't added any course yet</p>
          <Link to="/">
            <button className={styles.cart__btnEmtpy}>Keep searching</button>
          </Link>
        </div>
      ) : (
        <div className={styles.cart__grid}>
          <div className={styles.cart__list}>
            <SelectedCourses courses={cart} deleteEnabled={true} />
          </div>

          <div className={styles.cart__totalCont}>
            <div className={styles.cart__glass}>
              <div>
                {total > 0 && (
                  <div>
                    <h2>Total</h2>
                    <p className={styles.total}>${total}</p>
                  </div>
                )}
              </div>
              <div className={styles.cart__cardBtnGroup}>
                {cart.length > 0 && (
                  <>
                    <div>
                      <button className={styles.btn} onClick={deleteAll}>
                        Clear All
                      </button>
                    </div>
                    <div>
                      <Link to="/checkout">
                        <button className={styles.btn}>Checkout</button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
