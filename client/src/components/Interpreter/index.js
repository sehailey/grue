import store, { addLog } from '../../store'
import parseCommand, { dictionary } from './parser'
import * as VERBS from './verbs'
const { take, drop } = VERBS

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

  findItem (itemName, player, location) {
    let item = location.findItem(itemName)
    if (!item) item = player.findItem(itemName)
    if (!item && itemName) {
      return store.dispatch(addLog('You don\'t see that here!'))
    }
    return item
  }
  handleItems (props) {
    const { command, player, location } = props
    const { verb, itemNames, prep } = command

    const item1 = this.findItem(itemNames[0], player, location)
    const item2 = this.findItem(itemNames[1], player, location)
    const result = VERBS[verb](item1, item2, prep)
    if (result) return store.dispatch(addLog(result.log))
  }

  handleVerb (props) {
    const { command } = props
    if (command.itemNames.length === 0) {
      return this.handleIncompleteVerb(command)
    }
    if (command.verb === 'take') return take(props)
    if (command.verb === 'drop') return drop(props)
    const result = this.handleItems(props)
    if (result) return result

    return {
      log: `You entered: ${command.verb} ${command.items}`
    }
  }

  handleMove (props) {
    let log, loc
    const { command, location } = props
    const result = location.move(command.verb)
    console.log(result)
    if (result.loc) {
      loc = result.loc
      log = loc.look()
    } else log = result.log
    props.addLog(log)
    if (loc) return props.move(loc)
    return result
  }

  handleAction (props) {
    if (dictionary.isDirection(props.command.verb)) {
      return this.handleMove(props)
    }
    const result = this.handleVerb(props)
    if (result) return result
  }
  handleCommand (props) {
    const { command, location, player } = props
    if (!command.verb) return props.addLog(command.unknown)
    if (command.unknown) return props.logUnknown(command.unknown)
    if (!command.verb) return props.logInvalid()
    if (dictionary.isLook(command.verb)) return props.addLog(location.look())
    if (dictionary.isInv(command.verb)) {
      return props.addLog(player.listInv().log)
    }
    return this.handleAction(props)
  }
}

export default Interpreter
