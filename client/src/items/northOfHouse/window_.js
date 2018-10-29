import { Item } from '../../classes'

class window_ extends Item {
  constructor (name = 'window', loc = 'northOfHouse') {
    super(name, loc)
  }
  OPEN = props => {
    props.addLog('The windows are boarded and can\'t be opened.')
  }
}

export default window_
