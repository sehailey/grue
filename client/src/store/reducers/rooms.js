import axios from 'axios'

// /*** ACTION TYPES ***/
const GOT_MAP = 'GOT_MAP'
const MAP_ERROR = 'MAP_ERROR'

export const gotMap = map => ({
  type: GOT_MAP,
  map
})

export const mapError = error => ({
  type: MAP_ERROR,
  error
})

const defaultMap = []

/*** THUNK CREATORS ***/

export const getMap = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/rooms')
    dispatch(gotMap(data))
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
  default: {
    return map
  }
  }
}
