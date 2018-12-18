const OPEN = (props, visibleItems) => {
  const { command, addLog, updateItem } = props
  let complete = true

  if (!command.item1) {
    addLog('What do you want to open?')
    complete = false
    return complete
  }

  const target = visibleItems.find(item => item.name === command.item1)

  console.log(target)
  if (!target) {
    addLog('You don\'t see that here!')
    return complete
  }

  if (!target.OPEN) {
    addLog(`You must tell me how to do that with a ${target.name}`)
    return complete
  }

  if (target.isOpen) {
    addLog('It\'s already open.')
    return complete
  }

  if (target.isContainer && visibleItems.includes(target)) {
    const result = target.OPEN(props)
    if (result) updateItem(target)
    return complete
  }
  if (target.isWindow) {
    target.OPEN(props)
    return complete
  }

  return complete
}

export default OPEN
