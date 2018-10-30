import { Room } from '../classes'

class northOfHouse extends Room {
  S = props => props.addLog('The windows are all boarded.')

  W = props => {
    props.movePlayer('westOfHouse')
    return true
  }
  E = props => {
    props.movePlayer('behindHouse')
    return true
  }
}
export default northOfHouse
