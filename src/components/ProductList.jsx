import React, { Component } from 'react';
import { fetchProducts } from '../store/products/actions';
import { productAdded } from '../store/cart/actions';
import { connect } from "react-redux";
import Product from './Product';
//import api from "../api";


class ProductList extends Component {
  componentDidMount() {
      // api("/products")
      //   .then(data => {
      //   console.log('data from', data )
      //   // Tell the Redux store the data has been fetched
      //   // this.props.dispatch({
      //   //   type: "products/FETCHED",
      //   //   payload: data,
      //   // });
      //   this.props.dispatch(productsFetched(data));
      // });
      //console.log(this.props);
    // dispatch the "thunk" (function) itself
    this.props.dispatch(fetchProducts);
  }

  handleAddToCart = (productId) => {
    console.log("Adding product to cart", productId)
    this.props.dispatch(productAdded(productId))
  }

  
  render() {
    if(this.props.data){console.log('The products data', this.props.data)};
    const loading = !this.props.data;
    return (
      <div>
        <h1>Products!</h1>
          {loading ? <p>Loading...</p> : <h2>We have {this.props.data.length} products!</h2>} 
        <div className='ProductContainer'>
          {!loading && this.props.data.map((product, index) => (          
            <Product name={product.name} price={product.price} imageUrl={product.imageUrl}
             id={product.id} key={index} handleClick={() => this.handleAddToCart(product.id)}/>      // key again! react!
            ))
          }
        </div>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  console.log("redux state?", reduxState);
 return {
   data: reduxState.products,
 };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(ProductList);

