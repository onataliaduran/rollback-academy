import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ openDropdown, dropdownHandler, closeDropdown }) => {
  return (
    <header className={styles.nav}>
      {/* ===================== LOGO ===================== */}
      <div className={styles.nav__logo}>
        <NavLink to="/" exact activeClassName={styles.selected}>
          Rollback
        </NavLink>
      </div>
      {/* ===================== LINKS ===================== */}
      <nav className={styles.nav__links}>
        {/* ===================== LEFT ===================== */}
        <div className={styles.nav__left}>
          <div onClick={dropdownHandler}>
            <div>Categories</div>
          </div>
          {/* ===================== DROPDOWN ===================== */}
          {openDropdown && (
            <div className={styles.nav__dropdown}>
              <nav>
                <ul>
                  <li onClick={closeDropdown}>
                    <NavLink to="/category/frontend">Frontend</NavLink>
                  </li>
                  <li onClick={closeDropdown}>
                    <NavLink to="/category/backend">Backend</NavLink>
                  </li>
                  <li onClick={closeDropdown}>
                    <NavLink to="/category/programingFundamentals">
                      Programming Fundamentals
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
        {/* ===================== RIGHT ===================== */}
        <ul className={styles.nav__right}>
          <li className={styles.nav__item}>
            <NavLink to="/cart" activeClassName={styles.selected}>
              Cart
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="/account" activeClassName={styles.selected}>
              Account
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
