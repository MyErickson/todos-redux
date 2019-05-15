/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/App';

/**
 * Local import
 */
// store
import store from './store';

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
