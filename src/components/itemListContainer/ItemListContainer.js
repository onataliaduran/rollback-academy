import React from "react";
import Store from "../../containers/store/Store";
import ItemList from "../itemList/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = (props) => {
  return (
    <div className={styles.container}>
      <h2>Welcome to {props.greeting}</h2>
      <Store />
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
