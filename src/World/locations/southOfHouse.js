import Location from '../Location'

class southOfHouse extends Location {
  N = props => props.addLog('The windows are all boarded.')
  W = props => props.movePlayer('westOfHouse')
}
export default southOfHouse
