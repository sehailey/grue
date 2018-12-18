import { Container } from '../classes'

class Sack extends Container {
  constructor (data) {
    super(data)
    this.isInv = true
  }

  take () {
    return { log: 'Taken.', item: this }
  }

  drop () {
    return { log: 'Dropped.', item: this }
  }
}

export default Sack
