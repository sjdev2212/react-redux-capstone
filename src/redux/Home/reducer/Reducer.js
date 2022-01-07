import { FETCH_COUNTRIES, FETCH_ONE, FILTER_COUNTRIES } from '../actions/Actions';

const initialState = [];
let oneCountry = [];
const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return [...action.fetchedCountries];

    case FETCH_ONE:
      oneCountry = state.filter((elem) => elem.All.iso === action.payload);
      return oneCountry;
    case FILTER_COUNTRIES:
    { const newState = state.filter((elem) => {
      const regex = new RegExp(action.payload, 'gi');
      return elem.All.country.match(regex);
    });
    return newState;
    }
    default:
      return state;
  }
};

export default countriesReducer;
