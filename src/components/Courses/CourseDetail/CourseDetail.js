import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import styles from "./CourseDetail.module.css";
import CounterContainer from "../../../containers/CounterContainer/CounterContainer";

export const CourseDetail = ({ details }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const [stateItem, setStateItem] = useState(0);
  const onAdd = (number) => setStateItem(number);

  useEffect(() => {
    if (isInCart(details.id)) {
      setAlreadyAdded(true);
    }
  }, [details.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (stateItem > 0) {
      addItem({
        item: { ...details },
        quantity: stateItem,
      });
    }
  }, [stateItem]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.details__grid}>
      <div className={styles.details__imgCont}>
        <img
          src={details.img}
          alt={details.title}
          className={styles.details__img}
        />
      </div>
      <div>
        <h1 className={styles.details__title}>{details.title} </h1>
        <p className={styles.details__price}>{details.price}</p>
        <p className={styles.details__description}>{details.description}</p>
        <CounterContainer onAdd={onAdd} alreadyAdded={alreadyAdded} />
        {alreadyAdded && (
          <p>You already added this product to your shopping cart</p>
        )}
        {stateItem > 0 && (
          <Link to="/cart">
            <button className={styles.btn__buy}>Go to shopping Cart</button>
          </Link>
        )}
        {stateItem > 0 && <p>Items added to the Shopping Cart</p>}
      </div>
    </div>
  );
};

export default CourseDetail;
