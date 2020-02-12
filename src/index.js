import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Store from './Logics/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store = { Store }>
    <App/>
  </Provider>, 
  document.querySelector('#root')
);