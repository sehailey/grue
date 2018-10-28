import React from 'react'
import findVisibleItems from '../functions/findVisibleItems'
import * as VERB from '../verbs'

const interpret = props => {
  const { addLog, clearCommand, command } = props
  const visibleItems = findVisibleItems(props)
  console.log('Inside of interpret, the visibleItems are', visibleItems)

  console.log('I got a new command! the words are now:', command.words)
  if (command.isUnknown) {
    addLog(`I don't know the word ${command.unknown.toLowerCase()}.`)
    clearCommand()
  } else if (command.isDirection) {
    addLog('Someday you\'ll be able to move.')
  } else if (command.verb) {
    console.log(`you tried to ${command.verb} the ${command.item1}`)
    try {
      const complete = VERB[command.verb](props, visibleItems)
      console.log('COMPLETE:', complete)
      if (complete) clearCommand()
    } catch (e) {
      console.log(e)
    }
  }
}

export default interpret
