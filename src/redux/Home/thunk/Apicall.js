import axios from 'axios';
import _ from 'lodash';
import { FETCH_COUNTRIES } from '../actions/Actions';

const URL = 'https://covid-api.mmediagroup.fr/v1/cases?continent=South America';
export const getCountries = () => (dispatch) => {
  axios
    .get(URL)
    .then((res) => {
      const { data } = res;
      const fetchedCountries = [];
      _.forEach(data, (elem) => fetchedCountries.push(elem));
      dispatch({
        type: FETCH_COUNTRIES,
        fetchedCountries,
      });
    });
};

export default getCountries;
