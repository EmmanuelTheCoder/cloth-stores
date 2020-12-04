import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductMenu from './components/ProductMenu';

export default function(){
    return(
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={ProductMenu}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/details" component={Details}></Route>
               

            </Switch>
        </div>
        
    );
}

// npx browserslist --update-db