import world from '../../components/Location/world'
/*** ACTION TYPES ***/
const INITIALIZE_LOCATION = 'INITIALIZE_LOCATION'
const MOVE = 'MOVE'
const LOC_REMOVE_ITEM = 'LOC_REMOVE_ITEM'
const LOC_ADD_ITEM = 'LOC_ADD_ITEM'
const OPEN_WINDOW = 'OPEN_WINDOW'
/*** ACTIONS ***/
export const initializeLocation = location => ({
  type: INITIALIZE_LOCATION,
  location
})

export const move = location => ({
  type: MOVE,
  location
})

export const locRemoveItem = item => ({
  type: LOC_REMOVE_ITEM,
  item
})

export const locAddItem = item => ({
  type: LOC_ADD_ITEM,
  item
})

const defaultLocation = world['westOfHouse']
export const getLocation = () => dispatch => {
  dispatch(initializeLocation(defaultLocation))
}

export default function (location = {}, action) {
  switch (action.type) {
  case INITIALIZE_LOCATION:
    return action.location
  case MOVE:
    return action.location
  case LOC_REMOVE_ITEM:
    location._removeItem(action.item)
    return location
  case LOC_ADD_ITEM:
    location._addItem(action.item)
    return location
  case OPEN_WINDOW:
    location.openWindow()
    return location
  default:
    return location
  }
}
