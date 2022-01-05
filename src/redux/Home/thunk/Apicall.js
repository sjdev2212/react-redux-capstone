import axios from 'axios';
import { FETCH_CITIES } from '../actions/Actions';

const url = 'http://dataservice.accuweather.com/currentconditions/v1/topcities/100?apikey=nRTNwkt48kbXcvvTXkS6uG6ziOgDUeaG';

const getCities = () => async (dispatch) => {
  const result = await axios.get(url);
  const cities = result.data;
  const fetchedCities = [];
cities.forEach(element => {
    const key = element.Key
    const name = element.EnglishName;
    const temp = element.Temperature.Metric.Value
    const text = element.WeatherText
    
    fetchedCities.push({
       key,name,temp,text,
    });
});

  
  dispatch({
    type: FETCH_CITIES,
    fetchedCities,
  });
};

export default getCities;