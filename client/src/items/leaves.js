import { Item } from '../classes'

class leaves extends Item {
  EXAMINE = props =>
    props.addLog('You see nothing special about the pile of leaves.')
  MOVE = props => {
    props.addLog(
      'Done.\nIn disturbing the pile of leaves, a grating is revealed.'
    )
  }
}

export default leaves
