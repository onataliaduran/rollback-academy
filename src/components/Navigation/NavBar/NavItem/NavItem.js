import styles from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

const NavItem = ({ path, children }) => {
  return (
    <>
      <NavLink
        to={path}
        className={styles.nav__item}
        activeClassName={styles.selected}
      >
        <div>{children}</div>
      </NavLink>
    </>
  );
};

export default NavItem;
