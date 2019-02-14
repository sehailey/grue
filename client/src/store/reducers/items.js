import * as ITEMS from '../../components/Items/'
import { combineReducers } from 'redux'
import axios from 'axios'

/*** ACTION TYPES ***/

const INITIALIZE_ITEMS = 'INITIALIZE_ITEMS'
const ADD_TO_LOC = 'ADD_TO_LOC'
const REMOVE_FROM_LOC = 'REMOVE_FROM_LOC'

/*** INITIAL STATE ***/

/*** ACTION CREATORS ***/
export const initializeItems = items => ({
  type: INITIALIZE_ITEMS,
  items
})

export const addToLoc = (locId, itemId) => ({
  type: ADD_TO_LOC,
  payload: { locId, itemId }
})
export const removeFromLoc = (locId, itemId) => ({
  type: REMOVE_FROM_LOC,
  payload: { locId, itemId }
})

/*** THUNK CREATORS ***/

export const fetchItems = () => async dispatch => {
  const { data } = await axios.get('/api/items')
  dispatch(initializeItems(data))
}

// function addItemToLoc(state, action) {
//   const { payload } = action
//   const { itemId, locId } = payload
//
//   // Look up the correct post, to simplify the rest of the code
//   const loc = state[locId]
//
//   return {
//     ...state,
//     // Update our Post object with a new "comments" array
//     [locId]: {
//       ...loc,
//       items: loc.items.concat(itemId)
//     }
//   }
// }

const updateItemLoc = (state, action) => {
  const { payload } = action
  const { itemName, locName } = payload
  const item = state[itemName]
  return {
    ...state,
    [itemName]: { ...item, loc: locName }
  }
}
/** AllItems REDUCER **/
const all = (state = {}, action) => {
  switch (action.type) {
  case INITIALIZE_ITEMS:
    return action.all
  case ADD_TO_LOC:
    return {}

  default:
    return state
  }
}

const current = (state = [], action) => {
  switch (action.type) {
  case ADD_TO_LOC:
    return action.items.concat(item)
  default:
    return state
  }
}

export default combineReducers({ all, current })
