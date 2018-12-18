const MOVE = (props, direction) => {
  const { rooms, player, addLog, LOOK } = props
  let complete = true
  const currentLoc = rooms.find(room => room.name === player.currentLoc)
  if (!currentLoc[direction]) {
    addLog('You can\'t go that way.')
  } else {
    currentLoc[direction](props)
    if (currentLoc.name !== props.player.currentLoc) LOOK(props)
  }

  return complete
}

export default MOVE
