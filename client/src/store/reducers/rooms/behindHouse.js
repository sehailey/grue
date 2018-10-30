import { Room } from '../classes'

class behindHouse extends Room {
  N = props => props.movePlayer('northOfHouse')
  E = props => props.movePlayer('clearings')
  S = props => props.movePlayer('southOfHouse')
  W = props => {
    //const win = props.items.find(item => item.name === 'window_' && item.loc === 'behindHouse')
  }
}

export default behindHouse
