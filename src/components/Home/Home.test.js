/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Home from './Home';
import Countries from '../Countries/Countries'



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
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
});


  
