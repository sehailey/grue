export default (props, visibleItems) => {
  const { command, addLog } = props
  let complete = true

  if (!command.item1) {
    addLog('What do you want to drop?')
    complete = false
    return complete
  }

  const target = props.items.find(item => item.loc === 'player')

  if (!target) {
    addLog(`You don't have the ${this.name}`)
    return complete
  } else {
    target.loc = props.player.currentLoc
    props.addLog('Dropped.')
    props.updateItem(this)
  }

  return complete
}
