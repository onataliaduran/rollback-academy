import styles from "./Checkout.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { submitOrder } from "../../data/data";
import SelectedCourses from "../Courses/SelectedCourses/SelectedCourses";

const Checkout = ({ total }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { cart, deleteAll } = useContext(CartContext);
  const [showOrderReview, setShowOrderReview] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [btnEnable, setBtnEnable] = useState(false);
  const [formState, setFormState] = useState({});

  const onSubmit = (data) => {
    if (data.email === data.emailConfirmation) {
      setFormState({ ...data });
      setBtnEnable(true);
      setShowOrderReview(true);
    }
  };

  const handlerOrderSubmit = () => {
    submitOrder(formState, cart, total).then((id) => {
      setOrderId(id);
      deleteAll();
    });
  };

  return (
    <>
      <h1>Checkout</h1>
      <>
        {orderId ? (
          <div className={styles.centeredCont}>
            <h2>Your order was submitted</h2>
            <p>Your order ID is: {orderId}</p>
            <Link to="/">
              <button className={styles.btn__home}>Go to Home</button>
            </Link>
          </div>
        ) : (
          <div className={styles.checkout__grid}>
            <div>
              {!showOrderReview ? (
                <form
                  className={styles.checkout__form}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className={styles.checkout__input}>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      {...register("name", { required: true })}
                      placeholder="Fullname"
                    />
                    {errors.name && (
                      <div className={styles.err}>This field is required</div>
                    )}
                  </div>
                  <div className={styles.checkout__input}>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      {...register("phone", { required: true })}
                      placeholder="Phone"
                    />
                    {errors.phone && (
                      <div className={styles.err}>This field is required</div>
                    )}
                  </div>
                  <div className={styles.checkout__input}>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      {...register("email", { required: true })}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <div className={styles.err}>This field is required</div>
                    )}
                  </div>
                  <div className={styles.checkout__input}>
                    <input
                      id="emailConfirmation"
                      type="email"
                      name="emailConfirmation"
                      {...register("emailConfirmation", { required: true })}
                      placeholder="Confirm Email"
                    />
                    {errors.emailConfirmation && (
                      <div className={styles.err}>This field is required</div>
                    )}
                  </div>
                  <div>
                    <button className={styles.btns} type="submit">
                      Continue
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className={styles.checkout__billingCont}>
                    <h2>Billing information</h2>
                    <div className={styles.checkout__billingInfo}>
                      <p>Name: {formState.name}</p>
                      <p>Phone: {formState.phone}</p>
                      <p>Email: {formState.email}</p>
                    </div>
                  </div>
                  <div>
                    <h2>Order Details</h2>
                    <div>
                      <SelectedCourses courses={cart} />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className={styles.checkout__glass}>
                <div>
                  {total > 0 && (
                    <div>
                      <h2>Total</h2>
                      <p className={styles.checkout__total}>${total}</p>
                    </div>
                  )}
                  <div>
                    <button
                      disabled={!btnEnable}
                      className={styles.btns}
                      onClick={handlerOrderSubmit}
                    >
                      Finish order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default Checkout;
