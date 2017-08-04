import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import './index.css';
import todoApp from './reducers'
import App from './components';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddlerware = createLogger()

let store = createStore(
  todoApp, 
  {}, 
  applyMiddleware(loggerMiddlerware)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
