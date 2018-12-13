import Location from '../Location'
import northOfHouse from './northOfHouse'

class westOfHouse extends Location {
  constructor (data) {
    super(data)
    this.compass.addLoc('N', northOfHouse)
  }
}

export default westOfHouse
