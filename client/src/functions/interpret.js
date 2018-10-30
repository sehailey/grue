import findVisibleItems from '../functions/findVisibleItems'
import * as VERB from '../verbs'

const interpret = props => {
  const { addLog, clearCommand, command } = props
  const visibleItems = findVisibleItems(props)

  if (command.isUnknown) {
    addLog(`I don't know the word ${command.unknown.toLowerCase()}.`)
    clearCommand()
  } else if (command.isDirection) {
    VERB.MOVE(props, command.direction)
    clearCommand()
  } else if (command.isInvalid) {
    addLog('That\'s a sentence I don\'t recognize.')
    clearCommand()
  } else if (command.verb) {
    //console.log(`you tried to ${command.verb} the ${command.item1} ${command.prep} the ${command.item2}`)
    try {
      const complete = VERB[command.verb](props, visibleItems)
      if (complete) clearCommand()
    } catch (e) {
      console.log(e)
    }
  }
}

export default interpret
