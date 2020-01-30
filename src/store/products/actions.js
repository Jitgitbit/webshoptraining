import api from "../../api"; //check the structure!

export function productsFetched(data) {
  console.log(data);
  return {
    type: "products/FETCHED",
    payload: data
  };
}

export function fetchProducts(dispatch, getState) {
  console.log(dispatch);
  api("/products")
    .then(data => {
      // note: just `dispatch` here now
      dispatch(productsFetched(data));
    });
}