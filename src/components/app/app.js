import React from 'react';
import {CartPage, MainPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import {Route, Switch} from 'react-router-dom';
import ItemPage from "../pages/item-page";


const App = ({}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path="/cart" component={CartPage}/>
                <Route path={["/"]} exact component={MainPage}/>
                <Route path={["/:id"]} exact component={ItemPage}/>

            </Switch>
        </div>
    )
}

export default App;
