import impossibleAction from '../functions/impossibleAction'

export default (props, visibleItems) => {
  const { command, addLog } = props
  let complete = true

  if (!command.item1) {
    addLog('What do you want to take?')
    complete = false
    return complete
  }

  const target = visibleItems.find(item => item.name === command.item1)

  if (!target) {
    addLog('You don\'t see that here!')
    return complete
  }

  if (target.loc === 'player') {
    props.addLog('You already have the ' + target.name + '.')
    return complete
  }

  if (!target.TAKE) {
    const log = impossibleAction()
    addLog(log)
    return complete
  }

  if (visibleItems.includes(target)) {
    target.TAKE(props)
    return complete
  }
  return complete
}
