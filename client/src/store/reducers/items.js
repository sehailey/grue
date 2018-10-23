import * as ITEMS from '../../items'
import axios from 'axios'

/*
  Constructs the objects by retrieving them from the database, importing all of
  the constructors as ITEMS, and then mapping over the constructors to create
  new objects.
*/

/*** ACTION TYPES ***/

const REMOVE_ITEM = 'REMOVE_ITEM'
const ADD_ITEM = 'ADD_ITEM'
const GOT_ALL_ITEMS = 'GOT_ALL_ITEMS'
const UPDATE_ITEMS = 'UPDATE_ITEMS'

/*** INITIAL STATE ***/
const defaultItems = []

/*** ACTION CREATORS ***/

export const removeItem = item => ({
  type: REMOVE_ITEM,
  item,
})

export const addItem = item => ({
  type: ADD_ITEM,
  item,
})

export const updateItems = items => ({
  type: UPDATE_ITEMS,
  items,
})

export const gotAllItems = items => ({
  type: GOT_ALL_ITEMS,
  items,
})

/*** HELPER FUNCTION ***/
const constructItems = items => {
  const allItems = []
  items.map(item => {
    try {
      allItems.push(new ITEMS[item.name](item))
    } catch (e) {
      console.log(item.name + ' not a valid item')
    }
  })
  return allItems
}

/*** THUNK CREATORS ***/

export const getAllItems = () => async dispatch => {
  const {data} = await axios.get('/api/items')

  const items = constructItems(data)
  dispatch(gotAllItems(items))
}

/** REDUCER **/
export default function(items = defaultItems, action) {
  switch (action.type) {
    case GOT_ALL_ITEMS: {
      return [...action.items]
    }
    case UPDATE_ITEMS: {
      return [...action.items]
    }
    default: {
      return items
    }
  }
}
