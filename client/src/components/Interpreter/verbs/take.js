import store, { playerAddItem, locRemoveItem, addLog } from '../../../store'

const take = (player, location, itemName, isAll) => {
  if (player.hasItem(itemName)) {
    return store.dispatch(addLog('You already have that!'))
  }
  const item = location.findItem(itemName)
  if (!item) return store.dispatch(addLog('You don\'t see that here!'))

  const result = item.take()
  if (result.item) {
    store.dispatch(playerAddItem(result.item))
    store.dispatch(locRemoveItem(result.item))
  }
  let log
  if (isAll) log = itemName + ': ' + result.log
  else log = result.log
  store.dispatch(addLog(log))
  return result
}

const takeAll = props => {
  const { player, location } = props
  const itemNames = location.visibleInvItems.map(item => item.name)
  if (itemNames.length === 0) {
    return store.dispatch(addLog('There isn\'t anything here to take.'))
  }
  const isAll = true
  return itemNames.map(itemName => take(player, location, itemName, isAll))
}

const handleTake = props => {
  const { command, player, location } = props
  if (command.itemNames.includes('all')) return takeAll(props)
  else {
    return command.itemNames.map(itemName => take(player, location, itemName))
  }
}
export default handleTake
