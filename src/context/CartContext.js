import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (incomingItem) => {
    if (isInCart(incomingItem.item.id)) {
      let updatedArr = checkDuplications(incomingItem);
      setCart([...updatedArr]);
    } else {
      setCart([...cart, incomingItem]);
      console.log(cart);
    }
  };

  const isInCart = (id) => {
    const exist = cart.some((i) => i.item.id === id);
    console.log("eexiste", exist);
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

  return (
    <CartContext.Provider
      value={[cart, addItem, isInCart, removeItem, deleteAll]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
