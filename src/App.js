import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Homepage from "./components/Homepage";
import "./App.css";
import NavBar from "./components/NavBar";
import CheckoutPage from "./components/CheckoutPage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/products" component={ProductList} />
          <Route path="/checkout" component={CheckoutPage}/>
          <Route component={Homepage} />
        </Switch>
      </div>
    );
  }
}
