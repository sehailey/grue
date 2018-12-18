import { InvItem } from '../classes'

class egg extends InvItem {
  constructor (egg) {
    super(egg)
    this.isInvItem = false
  }
  EXAMINE = props => {
    return 'The jeweled egg is closed.'
  }
  OPEN = props => {
    props.addLog('You have neither the tools nor the expertise')
  }

  TAKE = props => {
    this.isInvItem = true
    this.loc = 'player'
    props.addLog('Taken.')
    props.updateItem()
  }
}

export default egg
