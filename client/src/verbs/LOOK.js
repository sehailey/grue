import { listItems } from '../functions'

const LOOK = props => {
  const complete = true
  const { player, rooms, addLog, items } = props
  const loc = rooms.find(room => room.name === player.currentLoc)
  const invItems = items.find(item => item.loc === player.currentLoc)
  let description = loc.description
  if (invItems.length) description += listItems(invItems)
  props.addLog(description)
  return complete
}

export default LOOK
