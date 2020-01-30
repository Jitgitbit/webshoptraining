const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "cart/ADDED": {
      const newProductId = action.payload;
      const isInCart = state.find(el => el.productId === newProductId);
      if (!isInCart) {
        return [
          ...state,
          { productId: newProductId, quantity: 1 }
        ]
      } else {
        const updatedCart = state.map(el => el.productId === newProductId ? { ...el, quantity: el.quantity + 1} : el)
        return updatedCart
      }
    }
    default: {
      return state;
    }
  }
}

/*

initalState = []

state = [{productId: 1, quantity: 1}]
*/