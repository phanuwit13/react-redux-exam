import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'
import rootReducer from './reducers'

import './index.css'
const middlewares = [thunk,createLogger()]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
