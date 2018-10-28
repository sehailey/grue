import { InvItem } from '../../classes'

class torch extends InvItem {
  BURN = props => {
    if (this.isLit === false) {
      this.isLit = true
      this.description = 'It\'s a torch. It is currently lit.'
      props.addLog('You lit the torch.')
    }
  }

  EXAMINE = props => {
    props.addLog(this.description)
  }
}

export default torch
