import styles from "./DropdownItem.module.css";
import { NavLink } from "react-router-dom";

const DropdownItem = ({ path, txt, children }) => {
  return (
    <>
      <NavLink to={path} className={styles.dropdown__item}>
        <div className={styles.dropdown__icon}>{children}</div>
        <div>{txt}</div>
      </NavLink>
    </>
  );
};

export default DropdownItem;
