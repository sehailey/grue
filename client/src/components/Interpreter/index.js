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

  handleIncompleteVerb (props) {
    const { command, addLog } = props
    addLog(`What do you want to ${command.verb}?`)
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
    console.log('HANDLEVERB', command)
    if (command.itemNames.length === 0) {
      return this.handleIncompleteVerb(props)
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
    let loc, log
    const { addLog, move, command, location } = props
    const result = location.move(command.verb)
    if (result.loc) {
      loc = result.loc
      log = loc.look()
    } else log = result.log
    addLog(log)
    if (loc) move(loc)
  }

  handleAction (props) {
    let { command } = props
    if (dictionary.isDirection(command.verb)) {
      return this.handleMove(props)
    } else return this.handleVerb(props)
  }
  handleCommand (props) {
    const { addLog, logUnknown, logInvalid, command, location, player } = props
    if (!command.verb) return logInvalid()
    else if (command.unknown) return logUnknown(command.unknown)
    else if (dictionary.isLook(command.verb)) return addLog(location.look())
    else if (dictionary.isInv(command.verb)) return addLog(player.listInv().log)
    else return this.handleAction(props)
  }
}

export default Interpreter
