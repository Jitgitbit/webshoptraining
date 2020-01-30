import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cart from './Cart';

export default class NavBar extends Component {
  render() {
    return (
      <div
      style={{
        display: "flex",
        color: "black",
        opactity: "0.7",
        justifyContent: "space-between",
        padding: "15px"
      }}
      >
        <Cart/>
        <Link to='/'>Homepage</Link>
        <Link to='/products'>Products List</Link>
      </div>
    )
  }
}
