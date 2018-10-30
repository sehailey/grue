import { Room } from '../classes'

class westOfHouse extends Room {
  E = props => props.addLog('The door is boarded and you can\'t remove the boards.')

  N = props => {
    props.movePlayer('northOfHouse')
    return true
  }
}

export default westOfHouse
