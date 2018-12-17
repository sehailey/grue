import { Container } from '../classes'

class Mailbox extends Container {
  constructor (data) {
    super(data)
  }
  open () {
    if (this.isOpen) return { log: 'It\'s already open.' }
    this.isOpen = true
    let result
    if (this.items.length === 0) result = 'You open the small mailbox.'
    else {
      const itemString = this._items.getItemString()
      result = `Opening the small mailbox reveals ${itemString}.`
    }
    return { log: result, item: this }
  }
  take () {
    return { log: 'It is securely anchored.' }
  }
}

export default Mailbox
