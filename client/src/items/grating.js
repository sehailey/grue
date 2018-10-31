import { InvItem } from '../classes'

class grating extends InvItem {
  EXAMINE = props => {
    props.addLog('The grating is closed.')
  }

  OPEN = props => props.addLog('The grating is locked.')
}

export default grating
