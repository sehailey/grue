import { listItems } from '../functions'

const LOOK = props => {
  const complete = true
  const { player, rooms, addLog, items } = props
  const loc = rooms.find(room => room.name === player.currentLoc)
  const invItems = items.filter(item => item.loc === player.currentLoc && item.isInvItem).map(item => item.aName)
  let description = loc.title + '\n' + loc.description
  if (invItems.length) description += ` You see ${listItems(invItems)} here.`
  addLog(description)
  return complete
}

export default LOOK
