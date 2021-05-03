import styles from "./Checkout.module.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext, deleteAll } from "../../context/CartContext";
import { submitOrder } from "../../data/data";

const Checkout = ({ total }) => {
  const { cart, deleteAll } = useContext(CartContext);
  const [showOrderReview, setShowOrderReview] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [formState, setFormState] = useState({
    formValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const handleChange = ({ target }) => {
    const inputValue = target.value;
    const { formValues } = formState;
    formValues[target.name] = inputValue;
    setFormState({ formValues });
    console.log("Form values", formValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowOrderReview(true);
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
              <button className={styles.btns}>Go to Home</button>
            </Link>
          </div>
        ) : (
          <div>
            {!showOrderReview ? (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.formValues.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={formState.formValues.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={formState.formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button className={styles.btns} type="submit">
                    Continue
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <h2>Order Review</h2>
                <div>
                  <h3>Buyer:</h3>
                  <p>Name: {formState.formValues.name}</p>
                  <p>Phone: {formState.formValues.phone}</p>
                  <p>Email: {formState.formValues.email}</p>
                </div>
                <div>
                  <h3>Items:</h3>
                  {cart.map((itemInCart) => {
                    return (
                      <div className={styles.grid} key={itemInCart.item.id}>
                        <img
                          className={styles.img}
                          src={itemInCart.item.img}
                          alt={itemInCart.item.title}
                        />
                        <div>
                          s<span>x{itemInCart.quantity}</span>
                          <span> {itemInCart.item.title} Course</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <h3>Total:</h3>
                  <p>{total}</p>
                  <button className={styles.btns} onClick={handlerOrderSubmit}>
                    Finish order
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </>
    </>
  );
};

export default Checkout;
