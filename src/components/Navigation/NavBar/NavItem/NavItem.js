import React from "react";
import styles from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

export const NavItem = ({ path, title }) => {
  return (
    <div>
      <NavLink to="/" exact activeClassName={styles.selected}>
        Rollback
      </NavLink>
    </div>
  );
};
