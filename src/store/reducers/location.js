import constructors from '../../components/Location/constructors'
//import * as locations from '../../components/Location/locations'
// import Compass from '../../components/Location/Compass'
import { Item, InvItem, Container } from '../../components/Items'

//import axios from 'axios'
//import Location from '../../components/Location'

// const buildWorld = () => {
//   const allLocations = constructors.map(constructor => {
//     try {
//       return new locations[constructor.name](constructor)
//     } catch (e) {
//       console.log(constructor.name + ' not a valid location.')
//       return e
//     }
//   })
//   return allLocations
// }
import { westOfHouse, northOfHouse } from '../../components/Location/locations'
const item1 = { name: 'item1', description: 'This is a test item' }
const invItem2 = { name: 'invItem2', description: 'This is a test item' }
const container1 = {
  name: 'container',
  description: 'This is a test container'
}

//const world = buildWorld()
const wos = constructors.find(cons => cons.name === 'westOfHouse')
const nos = constructors.find(cons => cons.name === 'northOfHouse')
const defaultLocation = new westOfHouse(wos)
const northofhouse = new northOfHouse(nos)
defaultLocation.compass.addLoc('N', northofhouse)
defaultLocation._addItem(new Item(item1))
defaultLocation._addItem(new InvItem(invItem2))
defaultLocation._addItem(new Container(container1))

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
