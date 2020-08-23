import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/antd/dist/antd.css';
import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import authReducer from './store/reducers/auth';
import webshopReducer from './store/reducers/webshop';
import { watchAuth, watchWebshop } from './store/sagas';

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  webshop: webshopReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchWebshop);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
