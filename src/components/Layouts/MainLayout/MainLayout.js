import React, { useState, useEffect, useContext } from "react";
import styles from "./MainLayout.module.css";
import { Switch, Route } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
// Components
import NavBar from "../../Navigation/NavBar/NavBar";
import CoursesContainer from "../../../containers/CoursesContainer/CoursesContainer";
import CourseDetailContainer from "../../../containers/CourseDetailContainer/CourseDetailContainer";
import Cart from "../../Cart/Cart";

const MainLayout = () => {
  const { acumulator, totalCalculator } = useContext(CartContext);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [productsInCart, setProductsInCart] = useState(0);
  const [total, setTotal] = useState(0);
  const dropdownToggler = () => setDropdownOpened(!dropdownOpened);
  const closeDropdown = () => setDropdownOpened(false);

  useEffect(() => {
    setProductsInCart(acumulator());
  }, [acumulator]);

  useEffect(() => {
    setTotal(totalCalculator());
  }, [totalCalculator]);

  return (
    <>
      <NavBar
        dropdownOpened={dropdownOpened}
        dropdownToggler={dropdownToggler}
        closeDropdown={closeDropdown}
        productsInCart={productsInCart}
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
            <Cart total={total} />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default MainLayout;
