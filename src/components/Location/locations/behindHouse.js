import Location from '../'
import { northOfHouse, clearing, southOfHouse, kitchen } from './'

class behindHouse extends Location {
  constructor (data) {
    super(data)
    this.compass.addLoc('N', northOfHouse)
    this.compass.addLoc('S', southOfHouse)
    this.compass.addLoc('E', clearing)
    this.window = { name: 'window', open: false }
  }

  openWindow () {
    if (this.window.open) return 'It\'s already open.'
    else {
      this.compass.addLoc('W', kitchen)
      return 'You open the window.'
    }
  }

  closeWindow () {
    if (!this.window.open) return 'It\'s already closed.'
    else {
      this.compass.W = { log: 'The window is closed.' }
      return 'You close the window.'
    }
  }
}

export default behindHouse
