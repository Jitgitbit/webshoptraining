import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    //console.log(this.props)
    return (
      <div>
        <h4>Product: {this.props.name} </h4> <img src={this.props.imageUrl}/>
        <h5>Price: {this.props.price} <button onClick={this.props.handleClick}>add this to Cart</button></h5>
      </div>
    )
  }
}