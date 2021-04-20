import React, { useState, useEffect } from "react";
import Counter from "../../components/Counter/Counter";

const CounterContainer = ({ onAdd }) => {
  const [stateCount, setStateCount] = useState(0);

  const [buyEnabled, setBuyEnabled] = useState(false);

  const addItemHandler = () => {
    setStateCount(stateCount + 1);
  };

  const removeItemHandler = () => {
    if (stateCount !== 0) {
      setStateCount(stateCount - 1);
    }
  };

  const add = () => {
    console.log(stateCount);
    onAdd(stateCount);
  };

  useEffect(() => {
    if (stateCount > 0) {
      setBuyEnabled(true);
    } else {
      setBuyEnabled(false);
    }
  }, [stateCount]);

  return (
    <div>
      <Counter
        counter={stateCount}
        addHandler={addItemHandler}
        removeHandler={removeItemHandler}
        buyEnabled={buyEnabled}
        add={add}
      />
    </div>
  );
};

export default CounterContainer;
