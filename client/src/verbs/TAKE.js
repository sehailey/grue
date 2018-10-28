import impossibleAction from '../functions/impossibleAction'

export default (props, visibleItems) => {
  const { command, addLog, updateItem } = props
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

  console.log('TARGET HAS OWN PROPERTY TAKE', target.hasOwnProperty('TAKE'))

  if (!target.TAKE) {
    const log = impossibleAction()
    addLog(log)
    return complete
  }

  if (visibleItems.includes(target)) {
    const result = target.TAKE(props)
    if (result) updateItem(target)
  }
  return complete
}
