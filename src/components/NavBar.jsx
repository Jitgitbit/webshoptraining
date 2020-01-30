import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class NavBar extends Component {
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
        <Link to='/checkout'>Checkout Page</Link>
        <Link to='/'>Homepage</Link>
        <Link to='/products'>Products List</Link>
        <div>
          <h3>Cart!</h3>
        <span>{this.props.cartItems.length}</span>
        </div>
      </div>
    )
  }
}
function mapStateToProps(reduxState) {
  console.log("redux state?", reduxState);
 return {
   cartItems: reduxState.cart,
 };
}
export default connect(mapStateToProps)(NavBar);