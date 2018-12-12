import { Room } from '../classes'

class forestPath extends Room {
  U = props => props.movePlayer('upTree')
  S = props => props.movePlayer('northOfHouse')
  N = props => props.movePlayer('clearing')
}
export default forestPath
