import { Room } from '../classes'

class behindHouse extends Room {
  N = props => props.movePlayer('northOfHouse')
  E = props => props.movePlayer('clearing')
  S = props => props.movePlayer('southOfHouse')
  W = props => {
    if (this.isOpen) {
      const win = props.items.find(item => item.name === 'window')
      win.loc = 'kitchen'
      props.movePlayer('kitchen')
      props.updateItem(win)
    } else props.addLog('The window is closed!')
  }
  OPEN = props => {
    this.isOpen = true
    props.updateRoom(this)
  }
  CLOSE = props => {
    this.isOPen = false
    props.updateRoom(this)
  }
}

export default behindHouse
