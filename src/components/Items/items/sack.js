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
    return { log: 'Dropped.' }
  }
}

export default Sack
