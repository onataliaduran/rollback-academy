import React from 'react';
import Store from '../../containers/store/Store';
import styles from './ItemListContainer.module.css';

const ItemListContainer = (props) => {
    return (
        <div className={styles.container}>
            <h2>Welcome to {props.greeting}</h2>
            <Store />
        </div>
    )
}

export default ItemListContainer;
