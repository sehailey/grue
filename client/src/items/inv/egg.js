import { InvItem } from '../../classes'

class egg extends InvItem {
  EXAMINE = props => {
    return this.description
  }
  open = props => {
    props.addLog('You have neither the tools nor the expertise')
  }
}

export default egg
