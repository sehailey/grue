class ItemSet {
  constructor (items) {
    if (!items) this.items = []
    else this.items = items
  }

  countItems () {
    return this.items.length
  }

  hasItem (itemName) {
    const visibleItems = this.findVisibleItems()
    const result = visibleItems.find(item => item.name === itemName)
    return result
  }

  findItem (itemName) {
    const visibleItems = this.findVisibleItems()
    //console.log('ITEMS VISIBLE INSIDE ITEMSET:', visibleItems)
    const result = visibleItems.find(item => item.name === itemName)
    return result
  }

  addItem (item) {
    this.items = [item, ...this.items]
    return this.items
  }

  removeItem (itemName) {
    const itemToRemove = this.items.find(item => (item.name = itemName))
    if (itemToRemove) {
      this.items = this.items.filter(item => item !== itemToRemove)
      return itemToRemove
    }
  }
  getItems () {
    return this.items
  }
  _findItemsInOpenContainers () {
    const result = []
    const containers = this.items.filter(item => item.isOpen)
    const containerItems = containers.map(container => container.getItems())
    console.log(
      '@@@@@@@@@@@@@@@@@@@@',
      'containers',
      containers,
      'containerItems',
      containerItems
    )

    return result
  }
  findVisibleItems () {
    const thisItems = this.items
    const containerItems = this._findItemsInOpenContainers()
    return thisItems.concat(containerItems)
  }
}

export default ItemSet
