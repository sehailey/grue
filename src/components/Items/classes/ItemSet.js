class ItemSet {
  constructor (items) {
    this.items = items
  }

  countItems () {
    return this.items.length
  }

  findItem (itemName) {
    const visibleItems = this.findVisibleItems()
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

  findVisibleItems () {
    let thisItems = this.items
    let containerItems = this.items
      .filter(item => item.isOpen)
      .map(container => container.getItems())
    return thisItems.concat(containerItems)
  }

  hasItem (item) {
    return !!this.items.includes(item)
  }
}

export default ItemSet
