import Player from '../../components/Player'

const GET_PLAYER = 'GET_PLAYER'
const PLAYER_ADD_ITEM = 'PLAYER_ADD_ITEM'
const PLAYER_DROP_ITEM = 'PLAYER_DROP_ITEM'
const PLAYER_MOVE = 'PLAYER_MOVE'

export const getPlayer = () => ({
  type: GET_PLAYER
})

export const playerAddItem = item => ({
  type: PLAYER_ADD_ITEM,
  item
})

export const playerDropItem = item => ({
  type: PLAYER_DROP_ITEM,
  item
})

export const playerMove = () => ({
  type: PLAYER_MOVE
})

const inv = []

const defaultPlayer = {
  name: 'novatore',
  isAlive: true,
  moves: 0,
  score: 0,
  inv: inv
}

export default function (player = defaultPlayer, action) {
  switch (action.type) {
  case GET_PLAYER: {
    const player = new Player(defaultPlayer)

    return player
  }

  case PLAYER_ADD_ITEM: {
    player.addToInv(action.item)
    player.moveInc()
    return player
  }

  case PLAYER_DROP_ITEM: {
    player.drop(action.item)
    player.moveInc()
    return player
  }

  case PLAYER_MOVE: {
    player.moveInc()
    return player
  }

  default: {
    return player
  }
  }
}
