import {Map} from '../../components/map'
//import axios from "axios"
const map = new Map()

/*** ACTION TYPES ***/
const MOVE = 'MOVE'
const REMOVE_ITEM_FROM_LOC = 'REMOVE_ITEM_FROM_LOC'
const ADD_ITEM_TO_LOC = 'ADD_ITEM_TO_LOC'
const GOT_CURRENT_LOC = 'GOT_CURRENT_LOC'
const CHANGE_ITEM_IN_LOC = 'CHANGE_ITEM_IN_LOC'

/*** INITIAL STATE ***/
const defaultLocation = {
    name: '',
    description: '',
    N: null,
    S: null,
    E: null,
    W: null,
    contains: [],
}

/*** ACTION CREATORS ***/
export const move = direction => ({
    type: MOVE,
    direction,
})

export const removeItemFromLoc = item => ({
    type: REMOVE_ITEM_FROM_LOC,
    item,
})

export const addItemToLoc = item => ({
    type: ADD_ITEM_TO_LOC,
    item,
})

export const gotCurrentLoc = location => ({
    type: GOT_CURRENT_LOC,
    location,
})

export const changeItemInLoc = location => ({
    type: CHANGE_ITEM_IN_LOC,
    location,
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
    case ADD_ITEM_TO_LOC: {
        action.item.isInv = false
        action.item.isLoc = true
        const newContains = location.contains.concat(action.item)
        return {...location, contains: newContains}
    }

    case REMOVE_ITEM_FROM_LOC: {
        const newContains = location.contains.filter(
            ele => ele.name !== action.item.name
        )
        return {...location, contains: newContains}
    }

    case CHANGE_ITEM_IN_LOC: {
        return {...location}
    }
    default: {
        return location
    }
    }
}
