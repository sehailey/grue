import Dictionary from './Dictionary'
const dictionary = new Dictionary()
class Actions {
  constructor () {
    this.actions = []
  }

  handleAction (props) {
    this.player = props.player
    this.world = props.world
    this.command = props.command
    if (dictionary.look.includes(this.command.verb)) {
      return { log: this.world.look() }
    }
    if (dictionary.inv.includes(this.command.verb)) {
      return { log: this.player.getInv() }
    }
  }

  handleTake (itemNames) {
    const all = itemNames.filter(itemName => itemName === 'all')
    if (all) return this.handleTakeAll()
    else return itemNames.map(itemName => this.take(itemName))
  }

  handleTakeAll () {
    const items = this.world.findItems()
    if (items.length === 0) return 'There isn\'t anything here to take.'
    const result = items.map(item => `${item.name}: ${item.TAKE()}.`).join('\n')
    return result
  }

  take (itemName) {
    const item = this.world.findItem(itemName)
    if (!item) return 'You don\'t see that here!'
    else return item.take()
  }
}

export default Actions
