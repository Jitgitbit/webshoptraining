import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default class Product extends Component {
  render() {
    //console.log(this.props)
    return (
      <div>
        {/* <h4>Product: {this.props.name} </h4> <img src={this.props.imageUrl}/>
        <h5>Price: {this.props.price} <Button onClick={this.props.handleClick}>add this to Cart</Button></h5> */}
        <Card className="Product" bg="info" text="white" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imageUrl} alt='NO PHOTO PROVIDED'/>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              Some description.
            </Card.Text>
            <Button variant="primary" onClick={this.props.handleClick}>Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

