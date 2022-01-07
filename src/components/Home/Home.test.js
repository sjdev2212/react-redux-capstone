import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Home from './Home';
import Countries from '../Countries/Countries';
import { GetOne, filterCountries } from '../../redux/Home/actions/Actions';
import Header from '../Header/Header';

describe('Check page rendering', () => {
  it('Render Home', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    screen.debug();
  });
  it('Render Countries', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Countries />
        </Provider>
      </BrowserRouter>,
    );
    screen.debug();
  });
  it('Render Header', () => {
    render(

      <Header />,

    );
    screen.debug();
  });
});
describe('Test actions', () => {
  it('should fetch one country', () => {
    const country = 'Argentina';
    const action = GetOne(country);
    expect(action).toEqual({ type: 'FETCH_ONE', payload: 'Argentina' });
  });

  it('should filter countries', () => {
    const input = 'Ar';
    const action = filterCountries(input);
    expect(action).toEqual({ type: 'FILTER_COUNTRIES', payload: 'Ar' });
  });
});
