/*** ACTION TYPES ***/
const MOVE = "MOVE"
const GET_CURRENT_LOC = "GET_CURRENT_LOC"

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

/*** THUNK CREATORS ***/

export const getCurrentLoc = direction => ({
  type: GET_CURRENT_LOC,
  direction
})

export default function(state = defaultRoom, action) {
  switch (action.type) {
    case MOVE: {
      if (state.currentLoc[action.direction]) {
        return state.currentLoc[action.direction]
      } else return state
    }
    default: {
      return state
    }
  }
}
