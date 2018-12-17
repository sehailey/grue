import Item from './Item'

class InvItem extends Item {
  constructor (data) {
    super(data)
    this.isInv = true
  }
}

export default InvItem
