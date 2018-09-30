import * as ITEMS from '../../components/items'
let allItems = []
for (let item in ITEMS) {
    if (ITEMS[item]) allItems.push(ITEMS[item])
}

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

/*** THUNK CREATORS ***/

export const getAllItems = () => async dispatch => {
    await dispatch(gotAllItems(allItems))
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