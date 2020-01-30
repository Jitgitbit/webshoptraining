
export function productAdded(productId) {
  return {
    type: "cart/ADDED",
    payload: productId
  };
}

