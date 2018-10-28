const EXAMINE = (props, visibleItems) => {
  const { command, addLog, updateItem } = props
  let complete = true

  if (!command.item1) {
    addLog('What do you want to examine?')
    complete = false
    return complete
  }

  const target = visibleItems.find(item => item.name === command.item1)

  if (!target) {
    addLog('You don\'t see that here!')
    return complete
  }
  if (!target.EXAMINE) {
    addLog(`It looks like an ordinary ${command.item1}`)
    return complete
  }

  const result = target.EXAMINE(props)
  if (result) updateItem(target)
  return complete
}

export default EXAMINE
