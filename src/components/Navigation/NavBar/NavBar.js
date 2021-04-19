import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiShoppingCart, FiUser } from "react-icons/fi";
import Dropdown from "../Dropdown/Dropdown";

const NavBar = ({ dropdownOpened, dropdownToggler, closeDropdown }) => {
  return (
    <header className={styles.nav}>
      <div className={styles.nav__logo}>
        <NavLink to="/" exact activeClassName={styles.selected}>
          Rollback
        </NavLink>
      </div>
      {/* ===================== LINKS ===================== */}
      <nav className={styles.nav__links}>
        {/* ===================== LEFT ===================== */}
        <div className={styles.nav__left}>
          <div className={styles.nav__dropdownCont} onClick={dropdownToggler}>
            <div>Categories</div>
            <div className={styles.nav__dropdownArrow}>
              <FiChevronDown />
            </div>
          </div>
          {/* ===================== DROPDOWN ===================== */}
          {dropdownOpened && <Dropdown closeDropdown={closeDropdown} />}
        </div>
        {/* ===================== RIGHT ===================== */}
        <ul className={styles.nav__right}>
          <li className={styles.nav__item}>
            <NavLink to="/cart" activeClassName={styles.selected}>
              <FiShoppingCart />
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="/account" activeClassName={styles.selected}>
              <FiUser />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
