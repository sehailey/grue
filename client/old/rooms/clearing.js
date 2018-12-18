import { Room } from '../classes'

class clearing extends Room {
  N = props => props.addLog('The forest becomes inpenetrable to the north.')
  E = props => props.movePlayer('forest2')
  S = props => props.movePlayer('forestPath')
  W = props => props.movePlayer('forest1')
}
export default clearing
