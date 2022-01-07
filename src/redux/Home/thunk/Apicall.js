import axios from 'axios';
import {FETCH_COUNTRIES } from '../actions/Actions';
import _ from 'lodash';

const URL = `https://covid-api.mmediagroup.fr/v1/cases?continent=South America`
export const getCountries = () => (dispatch) => {
  axios
    .get(URL)
    .then((res) => {
      const data = res.data;
      const fetchedCountries = [];
      _.forEach(data, (elem) => fetchedCountries.push(elem));
      dispatch({
             type: FETCH_COUNTRIES,
           fetchedCountries,
           });
    })
 
};


export default getCountries;