import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Counter from "../../components/Counter/Counter";

const CounterContainer = ({ initialValue, handler, details }) => {
  const { addItem, isInCart } = useContext(CartContext);

  const [counter, setCounter] = useState(initialValue);
  const [addToCartEnabled, setAddToCartEnabled] = useState(false);
  const [txtBtn, setTxtBtn] = useState("Add to cart");

  const addItemHandler = () => {
    // setCounter(counter + 1);
    handler(initialValue + 1);
  };

  const removeItemHandler = () => {
    if (initialValue !== 0) {
      // setCounter(counter - 1);
      handler(initialValue - 1);
    }
  };

  const addToCartHandler = () => {
    if (counter > 0) {
      addItem({
        item: { ...details },
        quantity: counter,
      });
    }
  };

  useEffect(() => {
    if (isInCart(details.id)) {
      setTxtBtn("Update in cart");
    } else {
      setTxtBtn("Add to cart");
    }
  }, [details.id]);

  useEffect(() => {
    if (initialValue > 0) {
      setAddToCartEnabled(true);
    } else {
      setAddToCartEnabled(false);
    }
  }, [initialValue]);

  return (
    <div>
      <Counter
        counter={counter}
        addHandler={addItemHandler}
        removeHandler={removeItemHandler}
        addToCartEnabled={addToCartEnabled}
        addToCartHandler={addToCartHandler}
        txtBtn={txtBtn}
      />
    </div>
  );
};

export default CounterContainer;
