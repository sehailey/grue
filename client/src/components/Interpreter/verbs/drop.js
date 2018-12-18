import store, { playerDropItem, locAddItem, addLog } from '../../../store'

const handleDrop = (player, location, itemName, isAll) => {
  const item = player.findItem(itemName)
  if (!item) return store.dispatch(addLog('You\'re not carrying that!'))
  const result = item.drop()
  let log
  if (isAll) log = `${itemName}: dropped.`
  else log = result.log
  store.dispatch(playerDropItem(itemName))
  store.dispatch(locAddItem(result.item))
  store.dispatch(addLog(log))
  console.log(player.inv)
}
const dropAll = props => {
  const { player, location } = props
  if (player.inv.length === 0) {
    return store.dispatch(addLog('You\'re not carrying anything.'))
  }
  const itemNames = player.inv.map(item => item.name)

  const isAll = true
  return itemNames.map(itemName =>
    handleDrop(player, location, itemName, isAll)
  )
}

const drop = props => {
  const { command, player, location } = props
  if (command.itemNames.includes('all')) return dropAll(props)
  else {
    return command.itemNames.forEach(itemName => {
      handleDrop(player, location, itemName)
    })
  }
}
export default drop
