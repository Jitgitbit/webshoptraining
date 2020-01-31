import api from '../../api';

// src/store/products/actions.js
export function productsFetched(data) {
  return {
    type: 'products/FETCHED',
    payload: data,
  };
}

export function fetchProducts(dispatch, getState) {
  api.get('/products').then((response) => {
    // note: just `dispatch` here now
    dispatch(productsFetched(response.data));
  });
}
