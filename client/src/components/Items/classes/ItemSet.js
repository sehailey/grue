class ItemSet {
  constructor (items) {
    if (!items) this.items = []
    else this.items = items
  }

  get invItems () {
    return this.items.filter(item => item.isInv)
  }

  get visibleItems () {
    const thisItems = this.items
    const containerItems = this._findItemsInOpenContainers()
    const surfaceItems = this._findItemsOnSurfaces()
    const result = thisItems.concat(containerItems).concat(surfaceItems)
    return result
  }

  get visibleInvItems () {
    const thisInvItems = this.invItems
    const containerItems = this._findItemsInOpenContainers()
    const surfaceItems = this._findItemsOnSurfaces()
    const surfaceInvItems = surfaceItems.filter(item => item.isInv)
    const containerInvItems = containerItems.filter(item => item.isInv)
    const result = thisInvItems
      .concat(containerInvItems)
      .concat(surfaceInvItems)

    return result
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

  findInvItem (itemName) {
    return this.visibleInvItems.find(item => item.name === itemName)
  }

  addItem (item) {
    const newItems = [...this.items].concat([item])
    this.items = newItems
    return item
  }
  removeItem (item) {
    let itemContext
    this.invItems.forEach(itm => {
      if (itm.name === item.name) itemContext = this.items
    })
    const containers = this.items.filter(item => item.isOpen)
    containers.forEach(container => {
      if (container.items.find(itm => itm.name === item.name)) {
        itemContext = container
      }
    })
    const surfaces = this.items.filter(itm => itm.isSurface)
    surfaces.forEach(surface => {
      if (surface.items.find(itm => itm.name === item.name)) {
        itemContext = surface
      }
    })
    if (itemContext) {
      itemContext.items = itemContext.items.filter(
        itm => itm.name !== item.name
      )
    }
    console.log(itemContext)
    return itemContext
  }

  removeVisibleInvItem (itemName) {
    const itemToRemove = this.findItem(itemName)
    if (itemToRemove) {
      this.items = this.items.filter(item => item !== itemToRemove)
      return itemToRemove
    }
  }

  get itemString () {
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
    const containers = this.items.filter(item => item.isOpen)
    const containerItems = containers.map(container => container.items)
    containerItems.map(itemset => {
      // console.log('containers ITEMSET', containers, containerItems, itemset)
      result.push(...itemset)
    })
    return result
  }

  _findItemsOnSurfaces () {
    const result = []
    const surfaces = this.items.filter(item => item.isSurface)
    const surfaceItems = surfaces.map(surface => surface.items)
    surfaceItems.map(itemset => {
      // console.log('surfaces, ITEMSET', surfaceItems, itemset)
      result.push(...itemset)
    })
    return result
  }
}

export default ItemSet
