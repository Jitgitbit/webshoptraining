import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from '@material-ui/core';
import { fetchProducts } from '../store/products/action';
import { addToCart } from '../store/cart/action';
import './ProductList.css';

// The "unconnected" inner component:
class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }

  addWasClicked(product) {
    console.log('I click add for ', product);
    this.props.dispatch(addToCart(product));
  }

  render() {
    const allProducts = this.props.products;
    const loading = !allProducts;
    const categoryId = parseInt(this.props.match.params.catId, 10);

    const filteredProducts = allProducts
      ? allProducts.filter((product) => product.categoryId === categoryId)
      : [];


    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>We have {filteredProducts.length} products!</p>
            {filteredProducts.map((prod) => (
              <Card className="product-card" key={prod.id}>
                {prod.name}
                <br />
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => this.addWasClicked(prod)}
                >
                  Add
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.products,
  };
}
export default connect(mapStateToProps)(ProductList);
