import * as ROOMS from '../../rooms'
import axios from 'axios'

// /*** ACTION TYPES ***/
const GOT_MAP = 'GOT_MAP'

export const gotMap = map => ({
  type: GOT_MAP,
  map,
})

const defaultMap = []

/*** HELPER FUNCTION ***/
const constructMap = rooms => {
  const allMap = []
  rooms.map(room => {
    try {
      allMap.push(new ROOMS[room.name](room))
    } catch (e) {
      console.log(room.name + 'not a valid room.')
    }
  })
  return allMap
}

/*** THUNK CREATORS ***/

export const getMap = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/rooms')
    const map = constructMap(data)
    dispatch(gotMap(map))
  } catch (err) {
    console.error(err)
  }
}

export default function(map = defaultMap, action) {
  switch (action.type) {
    case GOT_MAP: {
      return action.map
    }
    default: {
      return map
    }
  }
}
