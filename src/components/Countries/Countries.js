import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Countries = () => {
  const allCountries = useSelector((state) => state.countriesReducer);
  return (
    <section>

      {allCountries.map((element) => (
        <div className="countries-div" key={element.All.iso}>

          <img className="pics" src={require(`../../assets/${element.All.country}.png`)} alt="map" />   {/* eslint-disable-line */}

          <h4>{element.All.country}</h4>
          <p>
            Capital City :
            {element.All.capital_city}
          </p>
          <p>
            Cases confirmed:
            {element.All.confirmed}
          </p>
          <p>
            Total deaths:
            {element.All.deaths}
          </p>
          <p>
            Population:
            {element.All.population}
          </p>
          <p>
            Life Expectancy:
            {element.All.life_expectancy}
          </p>
          <p>
            Last Updated:
            {element.All.updated}
          </p>

        </div>
      ))}

      <Link to="/">Back Home</Link>

    </section>
  );
};

export default Countries;
