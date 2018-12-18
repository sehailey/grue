import Item from './Item'
import ItemSet from './ItemSet'
class Container extends Item {
  constructor (data) {
    super(data)
    this.isOpen = data.isOpen
    this.itemset = new ItemSet(data.items)
  }
  get items () {
    if (this.isOpen) return this.itemset.items
    else return []
  }

  set items (newItems) {
    this.itemset.items = newItems
  }

  get invItems () {
    return this.itemset.invItems
  }

  get visibleItems () {
    return this.itemset.visibleItems
  }

  get visibleInvItems () {
    return this.itemset.visibleInvItems
  }
  getContentsString () {
    return this.itemset.getItemString()
  }

  open (props) {
    if (this.isOpen) return { log: 'It\'s already open.' }
    this.isOpen = true
    return { log: `You open the ${this.name}`, item: this }
  }

  close (props) {
    if (!this.isOpen) return { log: 'It\'s already closed.' }
    this.isOpen = false
    return { log: `You close the ${this.name}`, item: this }
  }
  get count () {
    return this.items.length
  }

  addItem (item) {
    if (this.isOpen) {
      this.itemset.addItem(item)
      return {
        log: `You put the ${item.name} in the ${this.name}.`,
        result: this
      }
    } else return { log: `The ${this.name} is closed.` }
  }

  _addItem (item) {
    this.itemset.addItem(item)
  }

  _removeItem (item) {
    this.itemset.removeItem(item)
  }

  removeItem (itemName) {
    if (this.isOpen) {
      const item = this.itemset.removeItem(itemName)
      if (item) {
        return {
          log: `You take the ${item.name} from the ${this.name}.`,
          result: this
        }
      }
    } else return { log: `The ${this.name} is closed.` }
  }

  findItem (itemName) {
    return this.itemset.findItem(itemName)
  }
}

export default Container
