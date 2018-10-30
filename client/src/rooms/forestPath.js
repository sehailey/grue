import { Room } from '../classes'

class forestPath extends Room {
  U = props => props.movePlayer('upTree')
  S = props => props.movePlayer('northOfHouse')
}
export default forestPath
