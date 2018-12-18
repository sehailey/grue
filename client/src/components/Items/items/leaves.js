import { InvItem } from '../classes'

class Leaves extends InvItem {
  constructor (data) {
    super(data)
    this.hasBeenTaken = false
  }

  take () {
    if (!this.hasBeenTaken) this.hasBeenTaken = true

    return {
      log: !this.hasBeenTaken ?
        'In disturbing the pile of leaves, a grating is revealed.\nTaken' :
        'Taken.',
      item: this
    }
  }
}

export default Leaves
