import Compass from './Compass'

class Location {
  constructor ({ name, title, description, items }) {
    this.name = name
    this.title = title
    this.description = description
    this.items = items
    this.compass = new Compass()
  }

  describe () {
    return this.description
  }

  addItem (item) {
    this.items.push(item)
  }

  findItem (itemName) {
    return this.items.find(item => item.name === itemName)
  }
}

export default Location
