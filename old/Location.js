import Compass from './Compass'
import ItemSet from '../Items'
class Location {
  constructor ({ name, title, description, items }) {
    this.name = name
    this.title = title
    this.description = description
    this.items = new ItemSet()
    this.compass = new Compass()
  }

  look () {
    return this.description
  }

  move (direction) {
    return this.compass[direction]
  }

  addItem (item) {
    return this.items.addItem(item)
  }

  removeItem (item) {
    return this.items.removeItem(item)
  }

  getItems () {
    return this.items.getItems()
  }
}

export default Location
