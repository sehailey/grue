import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import location from "./reducers/location"

const reducer = combineReducers({ location })
//const reducer = items
let store
if (process.env.NODE_ENV === "development") {
  // add `redux-logger`
  const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  )
  store = createStore(reducer, middleware)
} else store = createStore(reducer)

export * from "./reducers/location"
export default store
