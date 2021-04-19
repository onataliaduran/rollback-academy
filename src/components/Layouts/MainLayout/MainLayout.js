import React, { useState } from "react";
import styles from "./MainLayout.module.css";
import { Switch, Route } from "react-router-dom";
// Components
import NavBar from "../../Navigation/NavBar/NavBar";
import CoursesContainer from "../../../containers/CoursesContainer/CoursesContainer";
import CourseDetailContainer from "../../../containers/CourseDetailContainer/CourseDetailContainer";
import Cart from "../../Cart/Cart";

const MainLayout = () => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const dropdownToggler = () => setDropdownOpened(!dropdownOpened);
  const closeDropdown = () => setDropdownOpened(false);

  return (
    <>
      <NavBar
        dropdownOpened={dropdownOpened}
        dropdownToggler={dropdownToggler}
        closeDropdown={closeDropdown}
      />

      <main className={styles.layout__content} onClick={closeDropdown}>
        <Switch>
          <Route exact path="/">
            <CoursesContainer />
          </Route>
          <Route exact path="/category/:id">
            <CoursesContainer />
          </Route>
          <Route exact path="/course/:id">
            <CourseDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default MainLayout;
