import Location from '../'
import { southOfHouse, clearing } from './'

export class forestPath extends Location {
  U = props => props.movePlayer('upTree')
  S = props => props.movePlayer('northOfHouse')
  N = props => props.movePlayer('clearing')
}
export class forest1 extends Location {
  constructor (data) {
    super(data)
    this.compass.addLoc('N', clearing)
    this.compass.addLoc('E', forestPath)
    this.compass.addLoc('S', forest3)
  }
}
export class forest2 extends Location {
  constructor (data) {
    super(data)
    this.compass.addLoc('E', forest4)
    this.compass.addLoc('S', forest3)
    this.compass.addLoc('W', forestPath)
  }

  E = props => props.movePlayer('forest4')
  S = props => props.movePlayer('forest3')
  W = props => props.movePlayer('forestPath')
}

export class forest3 extends Location {
  constructor (data) {
    super(data)
    this.compass.addLoc('NW', southOfHouse)
    this.compass.addLoc('N', clearing)
    this.compass.addLoc('W', forest1)
    this.compass.addLog('S', 'Storm-tossed trees block your way.')
    this.compass.addLog(
      'SE',
      'The rank undergrowth prevents eastward movement.'
    )
  }
}

export class forest4 extends Location {
  constructor (data) {
    super(data)
    this.compass.addLoc('N', forest2)
    this.compass.addLog('E', 'The mountains are impassible')
    this.compass.addLoc('S', forest2)
  }
}
