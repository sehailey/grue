import { Room } from '../classes'

class forest4 extends Room {
  N = props => props.movePlayer('forest2')
  E = props => props.addLog('The mountains are impassable.')
  S = props => props.movePlayer('forest2')
}
export default forest4
