//import axios from 'axios'
import World from '../../World'

const defaultWorld = {}
const world = new World()

/*** ACTION TYPES ***/
const GOT_WORLD = 'GOT_WORLD'
const MOVE = 'MOVE'

/*** ACTIONS ***/
export const gotWorld = world => ({
  type: GOT_WORLD,
  world
})

/*** ACTIONS ***/
export const move = loc => ({
  type: MOVE,
  loc
})

export const getWorld = () => dispatch => {
  dispatch(gotWorld(world))
}

export default function (world = defaultWorld, action) {
  switch (action.type) {
  case GOT_WORLD:
    return action.world
  case MOVE:
    return { currentLoc: action.loc, ...world }
  default:
    return world
  }
}
