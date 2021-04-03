// Component responsable for distributing the navigation elements and the main content in the space 

import React from 'react';
import styles from './MainLayout.module.css';
import { Switch, Route } from "react-router-dom";

import NavBar from '../../Navigation/NavBar/NavBar';
import CoursesContainer from '../../../containers/CoursesContainer/CoursesContainer';
import Cart from '../../Cart/Cart';

const MainLayout = () => {
    return (

        <div className={styles.container}>
            <NavBar />
            
            <Switch>
                <Route exact path="/">
                    <CoursesContainer />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>

        </div>
    )
}

export default MainLayout;
