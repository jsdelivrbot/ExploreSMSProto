import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import SyncedInput from './components/synced-input';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const deepstream = require('deepstream.io-client-js')
const DeepstreamMixin = require('deepstream.io-tools-react')

const client = deepstream('localhost:6020').login({}, () => {
  //ReactDOM.render call will go in here
  ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(reducers)}>
      <SyncedInput dsRecord="ambassadorRequest" />,
    // </Provider>,
  document.querySelector('.container')
)
})
DeepstreamMixin.setDeepstreamClient(client)

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
