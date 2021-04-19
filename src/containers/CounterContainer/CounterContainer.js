import React, { useState, useEffect } from "react";
import Counter from "../../components/Counter/Counter";

const CounterContainer = () => {
  const [quantity, setQuantity] = useState({
    stock: 5,
    count: 0,
  });

  const [buyEnabled, setBuyEnabled] = useState(false);

  const addItemHandler = () => {
    if (quantity.count < quantity.stock) {
      setQuantity({ ...quantity, count: quantity.count + 1 });
    }
  };

  const removeItemHandler = () => {
    if (quantity.count !== 0) {
      setQuantity({ ...quantity, count: quantity.count - 1 });
    }
  };

  useEffect(() => {
    if (quantity.count > 0) {
      setBuyEnabled(true);
    } else {
      setBuyEnabled(false);
    }
  }, [quantity.count]);

  return (
    <div>
      <Counter
        counter={quantity.count}
        addHandler={addItemHandler}
        removeHandler={removeItemHandler}
        buyEnabled={buyEnabled}
      />
    </div>
  );
};

export default CounterContainer;
