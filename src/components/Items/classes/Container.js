import Item from './Item'
import ItemSet from './ItemSet'
class Container extends Item {
  constructor (data) {
    super(data)
    this.isOpen = data.isOpen
    this._items = new ItemSet(data.items)
  }
  get items () {
    if (this.isOpen) return this._items.items
    else return []
  }

  set items (newItems) {
    this._items.items = newItems
  }
  open (props) {
    if (this.isOpen) return { log: 'It\'s already open.' }
    this.isOpen = true
    return { log: `You open the ${this.name}`, result: this }
  }

  close (props) {
    if (!this.isOpen) return { log: 'It\'s already closed.' }
    this.isOpen = false
    return { log: `You close the ${this.name}`, result: this }
  }
  countItems () {
    return this.items.length()
  }

  addItem (item) {
    if (this.isOpen) {
      this._items.addItem(item)
      return {
        log: `You put the ${item.name} in the ${this.name}.`,
        result: this
      }
    } else return { log: `The ${this.name} is closed.`, item: this }
  }

  removeItem (itemName) {
    if (this.isOpen) {
      const item = this.items.removeItem(itemName)
      if (item) {
        return {
          log: `You take the ${item.name} from the ${this.name}.`,
          result: this
        }
      }
    } else return { log: `The ${this.name} is closed.` }
  }

  findItem (itemName) {
    return this.items.findItem(itemName)
  }
  getItems () {
    return this.items
  }
}

export default Container
