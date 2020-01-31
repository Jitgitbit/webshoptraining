import React from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';

class Cart extends React.Component {
  componentDidMount() {
    console.log('I mounted');
  }

  render() {
    const cart = {};

    this.props.cartProducts.forEach((product) => {
      const key = `p${product.id}`;

      console.log('key: ', key);

      if (cart[key]) {
        cart[key].qty += 1;
      } else {
        cart[key] = { ...product, qty: 1 };
      }
    });

    console.log(cart);

    return (
      <Card>
        <h1>Cart ({Object.keys(cart).length})</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Total price</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cart).map((key) => (
              <tr key={cart[key].id}>
                <td>{cart[key].name}</td>
                <td>{cart[key].qty}</td>
                <td>&euro; {cart[key].qty * cart[key].price}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </Card>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cartProducts: reduxState.cart,
  };
}
export default connect(mapStateToProps)(Cart);
