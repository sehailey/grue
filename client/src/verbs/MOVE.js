const MOVE = (props, direction) => {
  console.log(direction)
  const { rooms, player, addLog, LOOK } = props
  let complete = true
  const currentLoc = rooms.find(room => room.name === player.currentLoc)
  if (!currentLoc[direction]) {
    addLog('You can\'t go that way.')
  } else {
    let success = currentLoc[direction](props)
    if (success) LOOK(props)
  }

  return complete
}

export default MOVE
