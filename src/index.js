import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import shopReducer from './reducers'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(shopReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
