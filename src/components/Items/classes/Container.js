import Item from './Item'
import ItemSet from './ItemSet'
class Container extends Item {
  constructor (data) {
    super(data)
    this.isOpen = data.isOpen
    this._items = new ItemSet(data.items)
  }
  get items () {
    return this._items.items
  }

  set items (newItems) {
    return (this._items.items = newItems)
  }
  open (props) {
    this.isOpen = true
    return { log: `You open the ${this.name}`, item: this }
  }

  close (props) {
    this.isOpen = false
    return { log: `You close the ${this.name}`, item: this }
  }
  countItems () {
    return this.items.length()
  }

  addItem (item) {
    if (this.isOpen) {
      this.items.addItem(item)
      return {
        log: `You put the ${item.name} in the ${this.name}.`,
        item: this
      }
    } else return { log: `The ${this.name} is closed.`, item: this }
  }

  removeItem (itemName) {
    if (this.isOpen) {
      const item = this.items.removeItem(itemName)
      if (item) {
        return {
          log: `You take the ${item.name} from the ${this.name}.`,
          item
        }
      }
    } else return { log: `The ${this.name} is closed.` }
  }

  findItem (itemName) {
    return this.items.findItem(itemName)
  }
  getItems () {
    if (this.isOpen) return this._items
    else return []
  }
}

export default Container
