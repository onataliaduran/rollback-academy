// Component responsable for distributing the navigation elements and the main content in the space 

import styles from './MainLayout.module.css';
import React from 'react';

const MainLayout = (props) => {
    return (
        <div className={styles.container}>
            <div>Navbar</div>
            <div>{props.children}</div>
        </div>
    )
}

export default MainLayout;
