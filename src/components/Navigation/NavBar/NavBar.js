import React from 'react';
import styles from './NavBar.module.css';
import { NavLink  } from "react-router-dom";

export const NavBar = () => {
    return (
        <header>
            <div>
                <NavLink to="/" exact activeClassName={styles.selected}>Brand</NavLink>
            </div>
            <nav>
                <ul>
                    <li>Categories</li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/cart" activeClassName={styles.selected}>Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/account" activeClassName={styles.selected}>Account</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;