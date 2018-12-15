// import constructors from './constructors'
// import * as locations from './locations'
import Compass from './Compass'
import { ItemSet } from '../Items'
//export * as locations from './locations'

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

class Location {
  constructor (data) {
    this.name = data.name
    this.description = data.description
    this._items = new ItemSet(data.items)
    this.compass = new Compass()
  }

  get items () {
    return this._items.items
  }
  look () {
    return this.description
  }

  move (direction) {
    return this.compass[direction.toUpperCase()]
  }

  drop (item) {
    return this._items.addItem(item)
  }

  take (itemName) {
    return this._items.removeItem(itemName)
  }
}

export default Location
