import {FETCH_CITIES, FETCH_ONE} from '../actions/Actions'

const initialState = [];

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return [...action.fetchedCities];
  case FETCH_ONE:
    const oneCity = state.filter((city) => city.key === action.payload)
    return oneCity
    default:
      return state;
  }
};

export default citiesReducer;