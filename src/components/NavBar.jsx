import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import Nav from 'react-bootstrap/Nav';


class NavBar extends Component {
  render() {
    //console.log(this.props.cartItems)
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
        {/* <span>{this.props.cartItems.length}</span> */}
        {/* <span>{this.props.cartItems.reduce((unique, next) => {
          if(!unique.some(obj => obj.productId === next.productId)){
            unique.push(next);
          }
          return unique;
        }, [])}</span> */}
        <span className="Cart"><h3>Cart!</h3>{this.props.cartItems.reduce((acc, currObject) => {
          return acc + currObject.quantity
        }, 0)}</span>
        </div>
      </div>
    //  <div>
    //     <Nav variant="pills">
    //       <Nav.Item>
    //         <Nav.Link href="/">Home</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link href="/products">Products List</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //       <Nav.Link href="/checkout">Checkout Page</Nav.Link>
    //       </Nav.Item>
        
    //       <span>{this.props.cartItems.reduce((acc, currObject) => {
    //         return acc + currObject.quantity
    //       }, 0)}</span>
        
    //     </Nav>
    //   </div>
    )
  }
}
function mapStateToProps(reduxState) {
  //console.log("redux state?", reduxState);
 return {
   cartItems: reduxState.cart,
 };
}
export default connect(mapStateToProps)(NavBar);
