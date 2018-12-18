import { Room } from '../classes'

class forest1 extends Room {
  N = props => props.movePlayer('clearing')
  E = props => props.movePlayer('forestPath')
  S = props => props.movePlayer('forest3')
}
export default forest1
