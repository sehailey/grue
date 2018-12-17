import store, { playerDropItem, locAddItem, addLog } from '../../../store'

const handleDrop = (player, location, itemName) => {
  const item = player.findItem(itemName)
  if (!item) return store.dispatch(addLog('You\'re not carrying that!'))
  store.dispatch(playerDropItem(item.name))
  store.dispatch(locAddItem(item))
  store.dispatch(addLog(item.drop()))
}
const dropAll = props => {
  const { player, location } = props
  const itemNames = player.inv.map(item => item.name)
  return itemNames.map(itemName => handleDrop(player, location, itemName))
}

const drop = props => {
  const { command, player, location } = props
  if (command.itemNames.includes('all')) return dropAll(props)
  else {
    return command.itemNames.map(itemName =>
      handleDrop(player, location, itemName)
    )
  }
}
export default drop
