import React from "react";
import styles from "./Dropdown.module.css";
import { NavLink } from "react-router-dom";
import { FiLayout, FiServer, FiBox } from "react-icons/fi";

const Dropdown = ({ closeDropdown }) => {
  return (
    <div className={styles.nav__dropdown}>
      <nav>
        <ul>
          <li className={styles.nav__dropdownLink} onClick={closeDropdown}>
            <NavLink
              to="/category/frontend"
              className={styles.nav__dropdownItem}
            >
              <div className={styles.nav__dropdownIcon}>
                <FiLayout />
              </div>
              <div>Frontend</div>
            </NavLink>
          </li>
          <li className={styles.nav__dropdownLink} onClick={closeDropdown}>
            <NavLink
              to="/category/backend"
              className={styles.nav__dropdownItem}
            >
              <div className={styles.nav__dropdownIcon}>
                <FiServer />
              </div>
              <div>Backend</div>
            </NavLink>
          </li>
          <li className={styles.nav__dropdownLink} onClick={closeDropdown}>
            <NavLink
              to="/category/programingFundamentals"
              className={styles.nav__dropdownItem}
            >
              <div className={styles.nav__dropdownIcon}>
                <FiBox />
              </div>
              <div>Programming Fundamentals</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown;
