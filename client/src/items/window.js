import { Item } from '../classes'

class window extends Item {
  constructor (name = 'window', loc = 'behindHouse') {
    super(name, loc)
  }
}

export default window
