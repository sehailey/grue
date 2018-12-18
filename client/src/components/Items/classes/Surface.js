import Container from './Container'
import ItemSet from './ItemSet'

class Surface extends Container {
  constructor (data) {
    super(data)
    this.isSurface = true

    this.itemset = new ItemSet(data.items)
  }

  get items () {
    return this.itemset.items
  }

  set items (newItems) {
    this.itemset.items = newItems
  }
  open () {
    return { log: 'NO.' }
  }

  close () {
    return { log: 'NO.' }
  }
}

export default Surface
