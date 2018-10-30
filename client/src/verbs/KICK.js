import unhelpfulAction from '../functions/unhelpfulAction'
const KICK = (props, visibleItems) => {
  const { command, addLog, updateItem } = props
  let complete = true

  if (!command.item1) {
    addLog('What do you want to kick?')
    complete = false
    return complete
  }

  const target = visibleItems.find(item => item.name === command.item1)

  if (!target) {
    addLog('You don\'t see that here!')
    return complete
  }

  if (!target.KICK) {
    addLog(unhelpfulAction('Kicking', target.name))
    return complete
  }

  if (visibleItems.includes(target)) {
    const result = target.KICK(props)
    if (result) updateItem(target)
    return complete
  }

  return complete
}

export default KICK
