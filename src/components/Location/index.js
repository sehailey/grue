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

  _removeItem (itemName) {
    return this._items.removeItem(itemName)
  }

  _addItem (item) {
    return this._items.addItem(item)
  }

  get items () {
    return this._items.items
  }

  get invItems () {
    return this._items.items.filter(item => item.isInv)
  }
  look () {
    return this.description
  }

  move (direction) {
    return this.compass[direction.toUpperCase()]
  }

  hasItem (item) {
    return this._items.hasItem(item)
  }

  findItem (item) {
    return this._items.findItem(item)
  }
}

export default Location
