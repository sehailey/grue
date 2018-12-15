import Item from './Item'
import ItemSet from './ItemSet'
class Container extends Item {
  constructor (data) {
    super(data)
    this.isOpen = false
    this.items = new ItemSet(data.items || [])
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
    return this.items.countItems()
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
    if (this.isOpen) return this.items
    else return []
  }
}

export default Container