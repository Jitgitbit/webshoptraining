const initialState = null;
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'products/FETCHED': {
      // => Ask yourself: what is action.payload?
      console.log('PAYLOAD', action.payload);
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
