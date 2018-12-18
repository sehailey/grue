import Compass from './Compass'
import { ItemSet } from '../Items'

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

  addLoc (direction, loc) {
    this.compass.addLoc(direction, loc)
  }

  addLog (direction, log) {
    this.compass.addLog(direction, log)
  }

  get items () {
    return this._items.items
  }

  set items (newItems) {
    this._items = newItems
  }
  get invItems () {
    return this._items.invItems
  }

  get visibleInvItems () {
    return this._items.visibleInvItems
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
