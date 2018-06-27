import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux";

import { Provider } from "react-redux";

import initial from "./data/initial";
import reducer from "./data/reducer";

import App from './App';

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
