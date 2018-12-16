const take = (player, location, item) => {
  //console.log(player, location, item)
  if (player.hasItem(item)) return { log: 'You already have that!' }
  if (!location.hasItem(item)) return { log: 'You don\'t see that here!' }
  return { log: item.take(), item }
}

const takeAll = (player, location) => {
  let result
  const items = location.invItems
  if (items.length === 0) {
    result = [{ log: 'There isn\'t anything here to take.' }]
  } else result = items.map(item => take(player, location, item))
  return result
}

export const handleTake = props => {
  let result = {}
  const { command, player, location } = props
  // console.log('*************\n', command, player, location, '***********\n')
  if (command.itemNames.includes('all')) {
    result.items = takeAll(player, location)
  } else {
    result.items = command.itemNames.map(item => take(player, location, item))
  }
  console.log(result)
  //I expect this to ba an array each with a log, and an item if it gets taken.
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
