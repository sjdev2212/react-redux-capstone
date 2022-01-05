import axios from 'axios';
import { FETCH_ONE } from '../actions/Action'; 

const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/107487?apikey=nRTNwkt48kbXcvvTXkS6uG6ziOgDUeaG&details=true&metric=true';

const getCity = () => async (dispatch) => {
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
    type: FETCH_ONE,
    fetchedCities,
  });
};

export default getCity;