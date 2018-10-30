import { Room } from '../classes'

class northOfHouse extends Room {
  N = props => props.movePlayer('forestPath')

  E = props => props.movePlayer('behindHouse')

  S = props => props.addLog('The windows are all boarded.')

  W = props => props.movePlayer('westOfHouse')
}
export default northOfHouse
