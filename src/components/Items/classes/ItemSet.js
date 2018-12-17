class ItemSet {
  constructor (items) {
    if (!items) this.items = []
    else this._items = items
  }

  set items (newItems) {
    this._items = newItems
  }

  get items () {
    return this._items
  }

  get invItems () {
    return this.items.filter(item => item.isInv)
  }

  countItems () {
    return this.items.length
  }

  hasItem (itemName) {
    const visibleItems = this.visibleItems
    const result = visibleItems.find(item => item.name === itemName)
    return !!result
  }

  findItem (itemName) {
    return this.visibleItems.find(item => item.name === itemName)
  }

  addItem (item) {
    this.items = [item, ...this.items]
    return item
  }

  removeItem (itemName) {
    const itemToRemove = this.items.find(item => item.name === itemName)
    if (itemToRemove) {
      this.items = this.items.filter(item => item !== itemToRemove)
      return itemToRemove
    }
  }

  getItemString () {
    let result = this.items.map(item => item.aName)
    if (result.length === 0) return ''
    if (result.length === 1) return result[0]
    if (result.length === 2) return result[0] + ' and ' + result[1]
    else {
      return (
        result.slice(0, result.length - 1).join(', ') +
        ' and ' +
        result[result.length - 1]
      )
    }
  }

  _findItemsInOpenContainers () {
    const result = []
    const containers = this.items.filter(
      item => item.constructor.name === 'Container' && item.isOpen
    )
    containers.map(container => result.push(...container.items))
    return result
  }
  get visibleItems () {
    const thisItems = this.items
    const containerItems = this._findItemsInOpenContainers()
    const result = thisItems.concat(containerItems)
    return result
  }

  get visibleInvItems () {
    const thisInvItems = this.invItems
    const containerItems = this._findItemsInOpenContainers()
    const containerInvItems = containerItems.filter(item => item.isInv)
    const result = thisInvItems.concat(containerInvItems)
    return result
  }
}

export default ItemSet
