const take = (player, location, itemName) => {
  console.log('PLAYER LOCATION ITEM', player, location, itemName)
  if (player.hasItem(itemName)) return { log: 'You already have that!' }
  if (!location.hasItem(itemName)) return { log: 'You don\'t see that here!' }
  const item = location.findItem(itemName)
  return item.take()
}

const takeAll = (player, location) => {
  let result
  const items = location.invItems
  if (items.length === 0) {
    result = { log: 'There isn\'t anything here to take.' }
  } else result = items.map(item => take(player, location, item))
  return result
}

export const handleTake = props => {
  const result = {}
  const { command, player, location } = props

  if (command.itemNames.includes('all')) return takeAll(player, location)
  else {
    const test = command.itemNames.map(item => take(player, location, item))
    result.log = test.map(res => res.log).join('\n')
    result.items = test.map(res => res.item)
  }

  return result
}

export const handleDrop = props => {
  const { command, player, location } = props
  const all = command.itemNames.find(itemName => itemName === 'all')
  if (all) return takeAll(player, location, command.itemNames)
  const result = location.items.map(item => player.take(player, location, item))
  //I expect this to ba an array each with a log, and an item if it gets taken.
  console.log(result)
}
