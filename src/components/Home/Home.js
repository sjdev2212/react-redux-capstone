import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../../redux/Home/thunk/Apicall';
import { GetOne, filterCountries } from '../../redux/Home/actions/Actions';
import Header from '../Header/Header';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const allCountries = useSelector((state) => state.countriesReducer);
  const filterAllCountries = (e) => {
    if (e.target.value === '') {
      dispatch(getCountries());
    } else { dispatch(filterCountries(e.target.value)); }
  };
  return (
    <section className="main">
      <Header />
      <input className="search" type="text" onKeyUp={filterAllCountries} placeholder="Enter Country" />
      <h1 className="main-heading">Covid in South America</h1>
      <h2 className="picker">Choose a Country</h2>
      <section className="container list-wraper">
        {allCountries.map((element) => (
          <div key={element.All.iso} className="lists">
            <h2 className="title-country">{element.All.country}</h2>
            <img className="pics-home" src={require(`../../assets/${element.All.country}-flag.png`)} alt="map" />{/* eslint-disable-line */}
            <button className="btn" type="button" onClick={() => dispatch(GetOne(element.All.iso))}>
              <Link className="link" state={element.All.country} to={`countries/${element.All.country}`}>
                {' '}
                <i className="fas fa-arrow-circle-right icon" />
              </Link>
            </button>

          </div>
        ))}
      </section>
    </section>
  );
};

export default Home;
