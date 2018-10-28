const READ = (props, visibleItems) => {
  const { command, addLog } = props
  let complete = true

  if (!command.item1) {
    addLog('What do you want to read?')
    complete = false
    return complete
  }

  const target = visibleItems.find(item => item.name === command.item1)

  if (!target) {
    addLog('You don\'t see that here!')
    return complete
  }

  if (!target.READ) {
    addLog(`How does one read a ${target.name}?`)
    return complete
  }

  const result = target.READ(props)
  if (result) props.updateItem(target)

  return complete
}

export default READ
