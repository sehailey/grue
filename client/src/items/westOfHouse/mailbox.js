import { Item } from '../../classes'
// import { listItems } from '../../functions'

class mailbox extends Item {
  EXAMINE = props => {
    if (!this.isOpen) props.addLog('The small mailbox is closed.')
    else {
      const items = this.getItemsInside(props)
      props.addLog(`the small mailbox contains ${items}.`)
    }
  }

  getItemsInside = props => props.items.filter(item => item.loc === this.name).map(item => item.aName)

  OPEN = props => {
    this.isOpen = true
    const itemsInside = this.getItemsInside(props)
    if (itemsInside.length) {
      props.addLog('Opening the mailbox reveals a leaflet inside.')
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
