import store, { addLog } from '../../store'
import parseCommand, { dictionary } from './parser'
import { take, drop } from './verbs'

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

  handleIncompleteVerb (command) {
    this.command = command
    return { log: `What do you want to ${command.verb}?` }
  }

  handleVerbWithItems (props) {
    const { command } = props
    if (command.itemNames.length === 0) {
      return this.handleIncompleteVerb(command)
    }
    if (command.verb === 'take') return take(props)
    if (command.verb === 'drop') return drop(props)

    return {
      log: `You entered: ${command.verb} ${command.items}`
    }
  }

  handleMove (props) {
    const { command, location } = props
    const { log, loc } = location.move(command.verb)
    props.addLog(log)
    if (loc) return props.move(loc)
  }
  handleCommand (props) {
    const { command, location, player } = props
    if (command.unknown) return props.logUnknown(command.unknown)
    if (!command.verb) return props.logInvalid()
    if (dictionary.isLook(command.verb)) return props.addLog(location.look())
    if (dictionary.isInv(command.verb)) return props.addLog(player.listInv())
    if (dictionary.isDirection(command.verb)) return this.handleMove(props)

    const verbWithItems = this.handleVerbWithItems(props)
    if (verbWithItems) return verbWithItems
    // return result
    return props.logInvalid()
  }
}

export default Interpreter
