import * as ITEMS from './items'
import axios from 'axios'

/*
  Constructs the objects by retrieving them from the database, importing all of
  the constructors as ITEMS, and then mapping over the constructors to create
  new objects.
*/

/*** ACTION TYPES ***/

const GOT_ALL_ITEMS = 'GOT_ALL_ITEMS'
//const GET_CURRENT_ITEMS = 'GET_CURRENT_ITEMS'
const UPDATE_ITEM = 'UPDATE_ITEM'

/*** INITIAL STATE ***/
const defaultItems = []

/*** ACTION CREATORS ***/

export const updateItem = item => ({
  type: UPDATE_ITEM,
  item
})

export const gotAllItems = items => ({
  type: GOT_ALL_ITEMS,
  items
})

/*** HELPER FUNCTION ***/
const constructItems = items => {
  const allItems = items.map(item => {
    try {
      return new ITEMS[item.name](item)
    } catch (e) {
      //console.log(item.name + ' not a valid item')
      return e
    }
  })

  return allItems
}

/*** THUNK CREATORS ***/

export const getAllItems = () => async dispatch => {
  const { data } = await axios.get('/api/items')

  const items = constructItems(data)
  dispatch(gotAllItems(items))
}

/** REDUCER **/
export default function (items = defaultItems, action) {
  switch (action.type) {
  case GOT_ALL_ITEMS: {
    return [...action.items]
  }
  case UPDATE_ITEM: {
    const oldItems = items.filter(item => item.name !== action.item.name)
    return oldItems.concat(action.item)
  }
  default: {
    return items
  }
  }
}
