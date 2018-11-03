import { Item } from '../classes'
import { randInt } from '../functions'
const rhetorts = [
  'Too late for that.',
  'Have your eyes checked.',
  'Look around'
]

class window extends Item {
  isWindow = true
  isOpen = false
  OPEN = props => {
    if (this.isOpen) props.addLog(rhetorts[randInt(rhetorts.length)])
    else {
      this.isOpen = true
      const loc = props.rooms.find(room => room.name === 'behindHouse')
      const kit = props.rooms.find(room => room.name === 'kitchen')
      loc.OPEN(props)
      kit.OPEN(props)
      props.addLog(
        'With great effort, you open the window far enough to allow entry.'
      )

      props.updateItem(this)
    }
  }

  CLOSE = props => {
    if (!this.isOpen) props.addLog(rhetorts[randInt(rhetorts.length)])
    else {
      this.isOpen = false
      const loc = props.rooms.find(room => room.name === 'behindHouse')
      const kit = props.rooms.find(room => room.name === 'kitchen')
      loc.CLOSE(props)
      kit.close(props)
      props.addLog('The window closes (more easily than it opened).')
      props.updateItem(this)
    }
  }
}

export default window
