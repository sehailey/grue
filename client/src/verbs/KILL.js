const KILL = (props, visibleItems) => {
  const { command, addLog, items } = props
  let complete = true

  if (!command.item1) {
    addLog('What do you want to kill?')
    complete = false
    return complete
  }

  const target = visibleItems.find(item => item.name === command.item1)

  if (!target) {
    addLog('You don\'t see that here!')
    return complete
  }

  if (!command.prep) {
    addLog(`What do you want to kill the ${command.item1} with?`)
    command.words.push('WITH')
    complete = false
    return complete
  }

  if (command.prep !== 'with') {
    addLog('That\'s not a sentence I understand.')
    return complete
  }

  const object = items.find(item => item.name === command.item2)

  if (object.loc !== 'player') {
    addLog(`You don't have the ${object.name}.`)
    return complete
  }

  if (!target.KILL) {
    addLog(`I've known strange people, but fighting a ${target.name}?`)
    return complete
  }

  return complete
}

export default KILL
