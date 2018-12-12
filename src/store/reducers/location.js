import axios from 'axios'
//import * as ROOMS from '../../rooms'

const defaultMap = {}

/*
  Constructs the rooms by retrieving the from the database, importing all of
  the constructors as ITEMS, and then mapping over the constructors to create
  new objects.
*/

/*** ACTION TYPES ***/
const GOT_MAP = 'GOT_MAP'
const MAP_ERROR = 'MAP_ERROR'

/*** ACTIONS ***/
export const gotMap = map => ({
  type: GOT_MAP,
  map
})

export const mapError = error => ({
  type: MAP_ERROR,
  error
})

export const updateRoom = room => ({
  type: UPDATE_ROOM,
  room
})

/*** HELPER FUNCTION ***/
const constructRooms = rooms => {
  const allRooms = rooms.map(room => {
    try {
      return new ROOMS[room.name](room)
    } catch (e) {
      //console.log(room.name + ' not a valid room')
      return e
    }
  })
  return allRooms
}

/*** THUNK CREATORS ***/

export const getMap = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/rooms')
    const rooms = constructRooms(data)
    dispatch(gotMap(rooms))
  } catch (err) {
    console.error(err)
    dispatch(mapError(err))
  }
}

export default function (map = defaultMap, action) {
  switch (action.type) {
  case GOT_MAP: {
    return action.map
  }
  case MAP_ERROR: {
    return action.error
  }
  case UPDATE_ROOM: {
    const oldRooms = map.filter(room => room.name !== action.room.name)
    return oldRooms.concat(action.room)
  }
  default: {
    return map
  }
  }
}
