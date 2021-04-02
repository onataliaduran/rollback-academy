import React from 'react';
import styles from './ItemCount.module.css';

const ItemCount = ({ counter, addHandler, removeHandler, addToCartHandler }) => {
    return (
        <div>
            <span className={styles.counter}>{counter}</span>
            <span>only 5 in stock</span>
            <div>
                <button className={styles.btn} onClick={removeHandler}>Remove</button>
                <button className={styles.btn} onClick={addHandler}>Add</button>
            </div>
            <button className={styles.btn} onClick={addToCartHandler}>Add to cart</button>
        </div>
    )
}

export default ItemCount; 
