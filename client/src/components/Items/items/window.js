import { Item } from '../classes'
class window extends Item {
  constructor (data) {
    super(data)
    this.isOpen = false
  }
  open () {
    if (this.isOpen) return { log: 'It\'s already open.' }
    else {
      this.isOpen = true
      return {
        log:
          'With great effort, you open the window far enough to allow entry.',
        item: this
      }
    }
  }

  close () {
    if (!this.isOpen) return { log: 'It\'s already closed.' }
    else {
      this.isOpen = false
      return {
        log: 'The window closes (more easily than it opened)',
        item: this
      }
    }
  }
}

export default window
