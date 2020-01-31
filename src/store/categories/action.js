import api from '../../api';

// src/store/categories/actions.js
export function categoriesFetched(data) {
  return {
    type: 'categories/FETCHED',
    payload: data,
  };
}

export function fetchCategories(dispatch, getState) {
  api.get('/categories').then((response) => {
    // note: just `dispatch` here now
    dispatch(categoriesFetched(response.data));
  });
}
