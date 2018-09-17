import { Map } from "../../components/map"
//import axios from "axios"
const map = new Map()

/*** ACTION TYPES ***/
const MOVE = "MOVE"
const GOT_CURRENT_LOC = "GOT_CURRENT_LOC"

/*** INITIAL STATE ***/
const defaultRoom = {
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

export default function(state = defaultRoom, action) {
  switch (action.type) {
    case MOVE: {
      if (state.currentLoc[action.direction]) {
        return state.currentLoc[action.direction]
      } else return state
    }
    case GOT_CURRENT_LOC: {
      return action.location
    }
    default: {
      return state
    }
  }
}
