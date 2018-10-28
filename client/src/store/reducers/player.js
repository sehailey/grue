const MOVE_PLAYER = 'MOVE_PLAYER'

export const movePlayer = loc => ({
  type: MOVE_PLAYER,
  loc
})

const defaultPlayer = {
  name: 'notnull',
  currentLoc: 'westOfHouse',
  isAlive: true,
  moves: 0,
  score: 0
}

export default function (player = defaultPlayer, action) {
  switch (action.type) {
  case MOVE_PLAYER: {
    player.currentLoc = action.loc
    return { ...player }
  }
  default: {
    return player
  }
  }
}
