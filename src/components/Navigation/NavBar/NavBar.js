import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiUser, FiStar } from "react-icons/fi";
import Dropdown from "../Dropdown/Dropdown";
import NavItem from "./NavItem/NavItem";
import CartWidget from "../../Cart/CartWidget/CartWidget";

const NavBar = ({
  dropdownOpened,
  dropdownToggler,
  closeDropdown,
  productsInCart,
}) => {
  return (
    <header className={styles.nav}>
      <div className={styles.nav__logo}>
        <NavLink to="/" exact>
          Rollback
        </NavLink>
      </div>

      <nav className={styles.nav__links}>
        <div className={styles.nav__left}>
          <div className={styles.nav__dropdownCont} onClick={dropdownToggler}>
            <div>Categories</div>
            <div className={styles.nav__dropdownArrow}>
              <FiChevronDown />
            </div>
          </div>
          {dropdownOpened && <Dropdown closeDropdown={closeDropdown} />}
        </div>

        <ul className={styles.nav__right}>
          <li>
            <NavItem path="/favorites">
              <FiStar />
            </NavItem>
          </li>
          <li>
            <NavItem path="/cart">
              <CartWidget totalProducts={productsInCart} />
            </NavItem>
          </li>
          <li>
            <NavItem path="/account">
              <FiUser />
            </NavItem>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
