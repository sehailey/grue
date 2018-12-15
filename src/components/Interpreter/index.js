import parseCommand, { dictionary } from './parser'

class Interpreter {
  constructor () {
    this.command = {
      verb: null,
      itemNames: [],
      prep: null
    }
  }

  interpret (string) {
    const command = parseCommand(string)
    this.command = command
    return command
  }

  handleUnknown (word) {
    return { log: `I don't know the word ${word}.` }
  }

  handleInvalid () {
    return { log: 'I\'m not sure what you\'re trying to say.' }
  }

  handleAction (props) {
    const { command } = props
    switch (command.verb) {
    case 'take':
      return this.handleTake(props)

    default:
      return { log: `handle action edge case: ${command.verb}` }
    }
  }

  handleCommand (props) {
    const { command, player, location } = props
    if (command.unknown) return this.handleUnknown(command.unknown)
    if (!command.verb) return this.handleInvalid()
    if (dictionary.isLook(command.verb)) return location.look()
    if (dictionary.isInv(command.verb)) return player.listInv()
    if (dictionary.isDirection(command.verb)) return location.move(command.verb)
    return this.handleVerb(props)
  }

  clearCommand () {
    this.verb = null
    this.itemNames = []
    this.prep = null
  }

  handleVerb (props) {
    const { command, player, location } = props
    if (command.itemNames.length === 0) {return this.handleIncompleteVerb(command)}
    if (command.verb === 'take') return this.handleTake(props)
    if (command.verb === 'drop') return this.handleDrop(props)
    //return this.handleItems(props)
    return { log: `edge case detected for: ${command}` }
  }

  handleItems (props) {
    const { command, player, location } = props
  }
  handleIncompleteVerb (command) {
    this.command = command
    return { log: `What do you want to ${command.verb}?` }
  }

  handleTake (props) {
    const { command, player, location } = props
    console.log('COMMAND', command)
    const all = command.itemNames.find(itemName => itemName === 'all')
    if (all) return this.handleTakeAll(player, location, command.itemNames)
    const result = location.items.map(item => player.take(item))
    console.log(result)
  }

  handleTakeAll (player, location, itemNames) {
    let result = { log: 'There isn\'t anything here to take.' }
    const items = location.getAll()
    if (items.length === 0) {
      return result
    }
  }

  take (itemName) {
    const item = this.world.findItem(itemName)
    if (!item) return 'You don\'t see that here!'
    else return item.take()
  }
}

export default Interpreter
