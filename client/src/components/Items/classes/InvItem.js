import Item from './Item'

class InvItem extends Item {
  constructor (data) {
    super(data)
    this.isInv = true
  }

  take () {
    return { log: `${this.name}: Taken.`, item: this }
  }

  drop () {
    return { log: 'Dropped.' }
  }
}

export default InvItem
