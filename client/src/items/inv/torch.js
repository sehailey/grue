import { InvItem } from '../../classes'

class torch extends InvItem {
  constructor (torch) {
    super(torch)
  }
  BURN = props => {
    if (this.isLit === false) {
      this.isLit = true
      this.description = 'It\'s a torch. It is currently lit.'
      return 'You lit the torch.'
    }
  }
}

export default torch
