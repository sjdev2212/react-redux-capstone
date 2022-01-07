export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const FETCH_ONE = 'FETCH_ONE';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';

export const GetOne = (payload) => ({
  type: FETCH_ONE,
  payload,
});

export const filterCountries = (payload) => ({
  type: FILTER_COUNTRIES,
  payload,

});
