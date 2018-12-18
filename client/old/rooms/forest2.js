import { Room } from '../classes'

class forest1 extends Room {
  E = props => props.movePlayer('forest4')
  S = props => props.movePlayer('forest3')
  W = props => props.movePlayer('forestPath')
}
export default forest1
