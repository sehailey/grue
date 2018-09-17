/*** ACTION TYPES ***/
const MOVE = "MOVE"

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
