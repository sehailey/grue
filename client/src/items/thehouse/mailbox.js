import { Item } from '../../classes'
// import { listItems } from '../../functions'

class mailbox extends Item {
  constructor (mailbox) {
    super(mailbox)
  }
  OPEN = props => {
    this.isOpen = true
    const itemsInside = props.items.filter(item => item.loc === this.name).map(item => item.aName)
    if (itemsInside.length) {
      props.addLog('Opening the mailbox reveals a letter inside.')
    } else props.addLog('Opened.')

    return true
  }

  CLOSE = props => {
    this.isOpen = false
    props.addLog(`You closed the ${this.name}.`)

    return true
  }

  TAKE = props => {
    props.addLog('It\'s securely anchored.')
  }
}

export default mailbox
