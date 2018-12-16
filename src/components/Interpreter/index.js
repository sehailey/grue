import parseCommand, { dictionary } from './parser'
import { handleTake, handleDrop } from './verbs'

class Interpreter {
  constructor () {
    this.command = {
      verb: null,
      itemNames: [],
      prep: null
    }
  }

  clearCommand () {
    this.verb = null
    this.itemNames = []
    this.prep = null
  }

  interpret (string) {
    const command = parseCommand(string)
    this.command = command
    return command
  }

  handleInvalid (command) {
    if (command.unknown) {
      return { log: `I don't know the word ${command.unknown}.` }
    }
    if (!command.verb) return { log: 'I\'m not sure what you\'re trying to say.' }
  }

  handleIncompleteVerb (command) {
    this.command = command
    return { log: `What do you want to ${command.verb}?` }
  }
  handleVerbWithItems (props) {
    const { command } = props
    if (command.itemNames.length === 0) {
      return this.handleIncompleteVerb(command)
    }
    if (command.verb === 'take') return handleTake(props)
    if (command.verb === 'drop') return handleDrop(props)
    //return this.handleItems(props)
    return { log: `edge case for handleVerbWithItems: ${command}` }
  }
  handleVerbWithoutItems (props) {
    const { command, player, location } = props
    if (dictionary.isLook(command.verb)) return location.look()
    if (dictionary.isInv(command.verb)) return player.listInv()
    if (dictionary.isDirection(command.verb)) return location.move(command.verb)
    //return { log: `edge case for handleVerbWithoutItems: ${command.verb}` }
  }
  handleCommand (props) {
    const { command } = props
    //console.log('HANDLECOMMAND COMMAND', command)
    const invalid = this.handleInvalid(command)
    const verbWithoutItems = this.handleVerbWithoutItems(props)
    const verbWithItems = this.handleVerbWithItems(props)
    if (invalid) return invalid
    if (verbWithoutItems) return verbWithoutItems
    if (verbWithItems) return verbWithItems

    return [
      {
        log: `edge case for handleCommand ${command.verb}, ${command.items}`
      }
    ]
  }
}

export default Interpreter
