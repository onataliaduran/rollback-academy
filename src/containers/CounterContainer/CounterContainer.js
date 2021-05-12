import { useState, useEffect } from "react";
import Counter from "../../components/Counter/Counter";

const CounterContainer = ({ onAdd, alreadyAdded }) => {
  const [stateCount, setStateCount] = useState(0);
  const [buyEnabled, setBuyEnabled] = useState(false);
  const [txtBtn, setTxtBtn] = useState("");

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

  const txtBtnHandler = () => {
    if (alreadyAdded) {
      setTxtBtn("Update in cart");
    } else {
      setTxtBtn("Add to cart");
    }
  };

  useEffect(() => {
    if (stateCount > 0) {
      setBuyEnabled(true);
      txtBtnHandler();
    } else {
      setBuyEnabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateCount]);

  return (
    <div>
      <Counter
        counter={stateCount}
        addHandler={addItemHandler}
        removeHandler={removeItemHandler}
        buyEnabled={buyEnabled}
        add={add}
        txtBtn={txtBtn}
      />
    </div>
  );
};

export default CounterContainer;
