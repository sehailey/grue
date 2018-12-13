import Player from '../../components/Player'
const GET_PLAYER = 'GET_PLAYER'

export const getPlayer = () => ({
  type: GET_PLAYER
})

const defaultPlayer = {
  name: 'notnull',
  isAlive: true,
  moves: 0,
  score: 0,
  inv: []
}

export default function (player = defaultPlayer, action) {
  switch (action.type) {
  case GET_PLAYER: {
    return new Player(defaultPlayer)
  }
  default: {
    return player
  }
  }
}
