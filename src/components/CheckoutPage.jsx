import React, { Component } from 'react';
import { connect } from "react-redux";

class CheckoutPage extends Component {
  
  render() {
    if(this.props.data){console.log('The products data on checkout page', this.props.data)};
    if(this.props.cartItems){console.log('The cart items on checkout page', this.props.cartItems)};
    
    // var matchingResult = array1.filter(function (o1) {
    //   return array2.some(function (o2) {
    //       return o1.id === o2.id; // return the ones with equal id
    //     });
    // });

    let cartedProducts = this.props.cartItems.map((elm, index) => {
      return {
        productId: elm.id,
        quantity: elm.quantity,
        key: index
      }
    });
  
    // if (this.props.cartItems.length === 0) {
    //   return <p>your cart is empty</p>
    //  }
    if (!this.props.data){
      return null;
    } 
    const matchingId = this.props.data.filter((productFromList) => {
      return this.props.cartItems.some((productFromCart) => {
        return productFromList.id === productFromCart.productId;
      });
    });

    // const allProducts = this.props.data.map((el, index) => {
    //   return {
    //     name: el.name,
    //     price: el.price,
    //     id: el.id,
    //     key: index
    //   }
    // });


    // const matchingId = this.props.map((product, index) => {
    //   if (this.props.cartItems === [] || this.props.data.id !== this.props.cartItems.productId){
    //     console.log(`empty cart`)
    //   }
    //   return {
    //     name: product.name,
    //     quantity: product.quantity,
    //     price: product.name,
    //     key: index,
    //   }
    // })

    console.log(matchingId)//Watch out under here with cartedProducts.length, for some reason cartedProducts === [] doesn't work!
    return (
      <div>
        <h1>Checkout Page!</h1>
          {cartedProducts.length === 0 ? <p>Your cart is empty</p> : <h2>You have {cartedProducts.length} products in your cart!</h2>}
          <ul>{matchingId.map((item, index) => {
          return <p>Product:{item.name} Price:{item.price} Quantity:{}</p>
          })}</ul>
      </div>
    )
  }
}
function mapStateToProps(reduxState) {
  console.log("redux state?", reduxState);
 return {
   data: reduxState.products,
   cartItems: reduxState.cart,
 };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(CheckoutPage);