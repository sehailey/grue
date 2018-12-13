//import axios from 'axios'
import World from '../../World'

const defaultWorld = {}
const world = new World()

/*** ACTION TYPES ***/
const GOT_WORLD = 'GOT_WORLD'

/*** ACTIONS ***/
export const gotWorld = world => ({
  type: GOT_WORLD,
  world
})

export const getWorld = () => dispatch => {
  dispatch(gotWorld(world))
}

export default function (world = defaultWorld, action) {
  switch (action.type) {
  case GOT_WORLD:
    return action.world
  default:
    return world
  }
}
