import styles from "./Dropdown.module.css";
import { FiLayout, FiServer, FiBox } from "react-icons/fi";
import DropdownItem from "./DropdownItem/DropdownItem";

const Dropdown = ({ closeDropdown }) => {
  return (
    <div className={styles.nav__dropdown}>
      <nav>
        <ul>
          <li className={styles.nav__dropdownLink} onClick={closeDropdown}>
            <DropdownItem path="/category/frontend" txt="Frontend">
              <FiLayout />
            </DropdownItem>
          </li>
          <li className={styles.nav__dropdownLink} onClick={closeDropdown}>
            <DropdownItem path="/category/backend" txt="Backend">
              <FiServer />
            </DropdownItem>
          </li>
          <li className={styles.nav__dropdownLink} onClick={closeDropdown}>
            <DropdownItem
              path="/category/programingFundamentals"
              txt="Programming Fundamentals"
            >
              <FiBox />
            </DropdownItem>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown;
