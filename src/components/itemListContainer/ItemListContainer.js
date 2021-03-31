import React from 'react';
import styles from './ItemListContainer.module.css';

const ItemListContainer = (props) => {
    return (
        <div className={styles.container}>
            <h2>Welcome to {props.greeting}</h2>
        </div>
    )
}

export default ItemListContainer;
