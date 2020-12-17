import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux setup
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
