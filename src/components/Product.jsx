import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h4>{this.props.name}</h4>
        <h5>{this.props.price}</h5>
      </div>
    )
  }
}