import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rooms from './reducers/rooms'
import log from './reducers/log'
import player from './reducers/player'
import items from './reducers/items'
import command from './reducers/command'

const reducer = combineReducers({ items, player, rooms, log, command })
//const reducer = items
let middleware
if (process.env.NODE_ENV === 'development') {
  // add `redux-logger`
  middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  )
} else middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)
export * from './reducers/rooms'
export * from './reducers/log'
export * from './reducers/player'
export * from './reducers/command'
export * from './reducers/player'
export * from './reducers/items'
export default store
