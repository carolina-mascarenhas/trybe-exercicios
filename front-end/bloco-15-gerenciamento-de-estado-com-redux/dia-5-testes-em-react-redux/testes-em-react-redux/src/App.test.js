import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import renderWithRedux from './renderWithRedux';

describe('testing clicks', () => {
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
