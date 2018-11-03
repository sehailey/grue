import { Item } from '../classes'

class grating extends Item {
  EXAMINE = props => {
    props.addLog('The grating is closed.')
  }

  OPEN = props => props.addLog('The grating is locked.')
}

export default grating
