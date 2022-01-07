/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../../redux/Home/thunk/Apicall';
import { GetOne } from '../../redux/Home/actions/Actions';
import Header from '../Header/Header';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const allCountries = useSelector((state) => state.countriesReducer);

  return (
    <section className="main">
      <Header />
      <h1 className="main-heading">Covid in South America</h1>
      <h2 className="picker">Choose a Country</h2>
      <section className="container list-wraper">
        {allCountries.map((element) => (
          <div key={element.All.iso} className="lists">
            {' '}
            <h2 className="title-country">{element.All.country}</h2>
            <img className="pics-home" src={require(`../../assets/${element.All.country}-flag.png`)} alt="map" />
            <button className="btn" type="button" onClick={() => dispatch(GetOne(element.All.iso))}><Link className="link" to="/countries"><i className="fas fa-arrow-circle-right icon" /></Link></button>

          </div>
        ))}
      </section>
    </section>
  );
};

export default Home;
