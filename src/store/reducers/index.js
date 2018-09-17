/*** ACTION TYPES ***/
const GET_ITEM = "GET_ITEM"

/*** INITIAL STATE ***/
const defaultItems = {}

/*** ACTION CREATORS ***/
const getItem = item => ({ type: GET_ITEM, item })

export default function(state = defaultItems, action) {
  switch (action.type) {
    default:
      return state
  }
}
