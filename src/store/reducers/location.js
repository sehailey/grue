import locConstructors from '../../components/Location/constructors'
import * as locations from '../../components/Location/locations'

import itemConstructors from '../../components/Items/constructors'
import * as ITEMS from '../../components/Items/items'

//import axios from 'axios'
//import Location from '../../components/Location'

export const buildWorld = () => {
  let world = {}
  locConstructors.map(constructor => {
    try {
      world[constructor.name] = new locations[constructor.name](constructor)
      return new locations[constructor.name](constructor)
    } catch (e) {
      console.log(constructor.name + ' not a valid location.')
      return e
    }
  })
  let itemMap = {}
  itemConstructors.map(constructor => {
    try {
      itemMap[constructor.name] = new ITEMS[constructor.name](constructor)
      return new ITEMS[constructor.name](constructor)
    } catch (e) {
      console.log(constructor.name + ' not a valid item.')
      return e
    }
  })
  itemMap.mailbox.addItem(itemMap.leaflet)
  world.westOfHouse._addItem(itemMap.mailbox)
  world.westOfHouse._addItem(itemMap.sack)

  return world
}

const world = buildWorld()

const { westOfHouse, northOfHouse } = world
westOfHouse.addLoc('N', northOfHouse)
northOfHouse.addLoc('S', westOfHouse)
const defaultLocation = world['westOfHouse']

/*** ACTION TYPES ***/
const GOT_LOCATION = 'GOT_LOCATION'
const MOVE = 'MOVE'
const LOC_REMOVE_ITEM = 'REMOVE_ITEM'

/*** ACTIONS ***/
export const gotLocation = location => ({
  type: GOT_LOCATION,
  location
})

/*** ACTIONS ***/
export const move = location => ({
  type: MOVE,
  location
})

/*** ACTIONS ***/
export const locRemoveItem = item => ({
  type: LOC_REMOVE_ITEM,
  item
})

export const getLocation = () => dispatch => {
  dispatch(gotLocation(defaultLocation))
}

export default function (location = defaultLocation, action) {
  switch (action.type) {
  case GOT_LOCATION:
    return action.location
  case MOVE:
    return action.location
  case LOC_REMOVE_ITEM:
    return {
      items: location.removeItem(action.item),
      ...location
    }
  default:
    return location
  }
}
