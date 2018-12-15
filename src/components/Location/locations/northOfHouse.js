import Location from '../'
import westOfHouse from './westOfHouse'

class northOfHouse extends Location {
  constructor (data) {
    super(data)
    this.compass.addLoc('S', westOfHouse)
  }
}

export default northOfHouse
