import React from 'react';
import styles from './NavBar.module.css';

import CartWidget from './../cart/CartWidget';

const NavBar = () => {
    return (
        <div>
            <header className={styles.nav}>
                <div className={styles.nav__logo}>Rollback</div>
                <div className={styles.nav__navbar}>  
                    <div className={styles.navbar__left}>
                        <div>Categories</div>
                    </div>
                    <div className={styles.navbar__right}>
                        <ul className={styles.navbar__userItems}>
                            <li><div><CartWidget/></div></li>
                            <li><div>Account</div></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar; 