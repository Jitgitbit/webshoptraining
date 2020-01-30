import api from "../../api"; //check the structure!

export function developersFetched(data) {
  console.log(data);
  return {
    type: "developers/FETCHED",
    payload: data
  };
}

export function fetchDevelopers(dispatch, getState) {
  console.log(dispatch);
  api("/developers")
    .then(data => {
      // note: just `dispatch` here now
      dispatch(developersFetched(data));
    });
}