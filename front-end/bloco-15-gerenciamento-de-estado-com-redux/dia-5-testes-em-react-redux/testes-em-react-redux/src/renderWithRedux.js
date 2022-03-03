import React from 'react';
import { createStore, combineReducers } from 'redux';
import { render } from '@testing-library/react';
import clickReducer from './reducers';
import { Provider } from 'react-redux';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({clickReducer}), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;