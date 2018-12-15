import { Room } from '../classes'

class upTree extends Room {
  D = props => props.movePlayer('forestPath')

  U = props => props.addLog('You can\'t go any higher')
}

export default upTree
