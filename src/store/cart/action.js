export function clearCart() {
  return {
    type: 'cart/CLEAR',
  };
}

export function sendToCart(product) {
  return {
    type: 'cart/ADD',
    payload: product,
  };
}

export function addToCart(product) {
  return (dispatch) => {
    dispatch(sendToCart(product));
  };
}
