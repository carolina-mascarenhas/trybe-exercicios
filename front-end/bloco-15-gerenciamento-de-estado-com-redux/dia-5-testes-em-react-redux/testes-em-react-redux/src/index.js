import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';

// Store provido pela nossa aplicação. Nos testes, precisamos prover um novo store para podermos controlá-lo

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
