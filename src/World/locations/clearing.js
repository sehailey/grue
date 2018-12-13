import Location from '../Location'
import { forest1, forest2, forestPath } from '../locations'

class clearing extends Location {
  constructor (data) {
    super(data)
    this.compass.addLog('N', 'The forest becomes inpenetrable to the north.')
    this.compass.addLoc('E', forest2)
    this.compass.addLoc('S', forestPath)
    this.compass.addLoc('W', forest1)
  }
  E = props => props.movePlayer('forest2')
  S = props => props.movePlayer('forestPath')
  W = props => props.movePlayer('forest1')
}
export default clearing
