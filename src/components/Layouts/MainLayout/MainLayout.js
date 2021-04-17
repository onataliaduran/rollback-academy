// Component responsable for distributing the navigation elements and the main content in the space

import React, { useState } from "react";
import styles from "./MainLayout.module.css";
import { Switch, Route } from "react-router-dom";
// Components
import NavBar from "../../Navigation/NavBar/NavBar";
import CoursesContainer from "../../../containers/CoursesContainer/CoursesContainer";
import Cart from "../../Cart/Cart";

const MainLayout = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownHandler = () => setOpenDropdown(!openDropdown);
  const closeDropdown = () => setOpenDropdown(false);

  return (
    <>
      <NavBar
        openDropdown={openDropdown}
        dropdownHandler={dropdownHandler}
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
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default MainLayout;
