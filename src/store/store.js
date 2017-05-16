import { applyMiddleware, compose, createStore, combineReducers } from 'redux'

import { baqendReducer, baqendMiddleware, baqendConnect } from 'redux-baqend'
import middlewares from '../middleware'
import reducers from '../reducers'

export default (initialState = {}) => {

  const reducer = combineReducers({
    baqend: baqendReducer,
    ...reducers
  })

  const middleware = applyMiddleware(
    baqendMiddleware,
    ...middlewares
  )

  const enhancers = compose(
    baqendConnect,
    middleware
  )

  const store = createStore(reducer, initialState, enhancers)

  return store
}
