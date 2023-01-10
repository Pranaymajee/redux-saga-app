import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; //impo
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* THE <Provider> COMPONENT MAKES THE REDUX STORE AVAILABLE
  TO ANY NESTED COMPONENTS THAT NEED TO ACCESS THE REDUX STORE.
  (HERE THE NESTED COMPONENT IS THE App COMPONENT) */
  <Provider store={store}>
      <App />
  </Provider>
);