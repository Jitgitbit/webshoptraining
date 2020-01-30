import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class NavBar extends Component {
  render() {
    console.log(this.props.cartItems)
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
        {/* <span>{this.props.cartItems.length}</span> */}
        {/* <span>{this.props.cartItems.reduce((unique, next) => {
          if(!unique.some(obj => obj.productId === next.productId)){
            unique.push(next);
          }
          return unique;
        }, [])}</span> */}
        <span>{this.props.cartItems.reduce((acc, currObject) => {
          return acc + currObject.quantity
        }, 0)}</span>
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
