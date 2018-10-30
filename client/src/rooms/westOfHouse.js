import { Room } from '../classes'

class westOfHouse extends Room {
  N = props => props.movePlayer('northOfHouse')
  E = props =>
    props.addLog('The door is boarded and you can\'t remove the boards.')
  S = props => props.movePlayer('southOfHouse')
}

export default westOfHouse
