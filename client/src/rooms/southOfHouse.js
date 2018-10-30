import { Room } from '../classes'

class southOfHouse extends Room {
  N = props => props.addLog('The windows are all boarded.')

  W = props => {
    props.movePlayer('westOfHouse')
    return true
  }
}
export default southOfHouse
