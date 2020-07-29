import { createStore, compose, applyMiddleware } from 'redux'

import thunk from './middlewares/thunk'
import filterSpam from './middlewares/filterSpam'
import valid from './middlewares/valid'

import rootReducer from './reducers/index'

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk, filterSpam, valid)
    ),
  )
)

const store = configureStore({})

export default store
