const initialstate = [];

export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case 'cart/ADD': {
      return [...state, action.payload];
    }
    case 'cart/REMOVE': {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case 'cart/CLEAR': {
      return [];
    }

    default: {
      return state;
    }
  }
}
