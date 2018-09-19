import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import location from "./reducers/location"
import log from "./reducers/log"

const reducer = combineReducers({ location, log })
//const reducer = items
let middleware
if (process.env.NODE_ENV === "development") {
  // add `redux-logger`
  middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  )
} else middleware = applyMiddleware(thunkMiddleware)

const store = createStore(reducer, middleware)
export * from "./reducers/location"
export * from "./reducers/log"
export default store
