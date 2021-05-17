import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [newQuantity, setNewQuantity] = useState();

  const addItem = (incomingItem) => {
    if (isInCart(incomingItem.item.id)) {
      let updatedArr = checkDuplications(incomingItem);
      setCart([...updatedArr]);
    } else {
      setCart([...cart, incomingItem]);
    }
  };

  const isInCart = (id) => {
    const exist = cart.some((i) => i.item.id === id);
    return exist;
  };

  const checkDuplications = (incomingItem) => {
    const newArr = [...cart];
    const index = newArr.findIndex((i) => i.item.id === incomingItem.item.id);
    newArr.splice(index, 1, incomingItem);
    return newArr;
  };

  const removeItem = (id) => {
    const withoutItem = cart.filter((i) => i.item.id !== id);
    setCart([...withoutItem]);
  };

  const deleteAll = () => setCart([]);

  const acumulator = () => {
    const newArr = [...cart];
    const acumulator = newArr.reduce((sum, { quantity }) => sum + quantity, 0);
    return acumulator;
  };

  const totalCalculator = () => {
    const newArr = [...cart];
    const calculator = newArr.reduce((sum, { item, quantity }) => {
      return item.price * quantity + sum;
    }, 0);
    return calculator;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isInCart,
        removeItem,
        deleteAll,
        acumulator,
        totalCalculator,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
