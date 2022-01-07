import { FETCH_COUNTRIES, FETCH_ONE } from '../actions/Actions';

const initialState = [];
let oneCountry = [];
const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return [...action.fetchedCountries];

    case FETCH_ONE:
      oneCountry = state.filter((elem) => elem.All.iso === action.payload);
      return oneCountry;
    default:
      return state;
  }
};

export default countriesReducer;
