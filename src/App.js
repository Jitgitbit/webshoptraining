import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Homepage from "./components/Homepage";
import "./App.css";
import NavBar from "./components/NavBar";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/products" component={ProductList} />
          <Route component={Homepage} />
        </Switch>
      </div>
    );
  }
}
