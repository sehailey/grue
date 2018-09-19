import { Map } from "../../components/map"
//import axios from "axios"
const map = new Map()

/*** ACTION TYPES ***/
const MOVE = "MOVE"
const REMOVE_ITEM_FROM_LOC = "REMOVE_ITEM_FROM_LOC"
const GOT_CURRENT_LOC = "GOT_CURRENT_LOC"

/*** INITIAL STATE ***/
const defaultLocation = {
  name: "",
  description: "",
  n: null,
  s: null,
  e: null,
  w: null,
  contains: {}
}

/*** ACTION CREATORS ***/
export const move = direction => ({
  type: MOVE,
  direction
})

export const removeItemFromLoc = item => ({
  type: REMOVE_ITEM_FROM_LOC,
  item
})

export const gotCurrentLoc = location => ({
  type: GOT_CURRENT_LOC,
  location
})

/*** THUNK CREATORS ***/

export const getCurrentLoc = () => async dispatch => {
  // try {
  //   const { data } = await axios.get("/api/items")
  //   dispatch(gotCurrentLoc(data))
  // } catch (err) {
  //   console.error(err)
  // }
  await dispatch(gotCurrentLoc(map.currentLoc))
}

export default function(location = defaultLocation, action) {
  switch (action.type) {
    case MOVE: {
      if (location[action.direction]) {
        return location[action.direction]
      } else return location
    }
    case GOT_CURRENT_LOC: {
      return action.location
    }
    case REMOVE_ITEM_FROM_LOC: {
      const item = action.item

      if (location.contains.includes(item)) {
        const newContains = location.contains.filter(
          ele => ele.name !== item.name
        )
        return { ...location, contains: newContains }
      } else return location
    }
    default: {
      return location
    }
  }
}
