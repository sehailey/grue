import * as ITEMS from '../../components/Items/'
// import axios from 'axios'

/*** ACTION TYPES ***/

const GOT_ALL_ITEMS = 'GOT_ALL_ITEMS'
const TAKE = 'TAKE'

/*** INITIAL STATE ***/
const defaultItems = {}

/*** ACTION CREATORS ***/

export const gotAllItems = items => ({
  type: GOT_ALL_ITEMS,
  items
})

export const take = item => ({
  type: TAKE,
  item
})

/*** THUNK CREATORS ***/

export const getAllItems = () => async dispatch => {
  // const { data } = await axios.get('/api/items')
  // const items = constructItems(data)

  dispatch(gotAllItems(ITEMS))
}

/** REDUCER **/
export default function (items = defaultItems, action) {
  switch (action.type) {
  case GOT_ALL_ITEMS: {
    return action.items
  }
  // case TAKE: {
  //   const newItem = items.find(item => item.name === action.item.name)
  //   newItem.TAKE()
  //   return items.filter(item => item.name !== action.item.nane).conca(newItem)
  // }
  default: {
    return items
  }
  }
}
