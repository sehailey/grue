import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import location from "./reducers/location"

const reducer = combineReducers({ location })
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
export default store
