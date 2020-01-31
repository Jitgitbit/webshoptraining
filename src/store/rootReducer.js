import { combineReducers } from 'redux';
import categories from './categories/reducer';
import products from './products/reducer';
import cart from './cart/reducer';

export default combineReducers({
  products,
  categories,
  cart,
});
