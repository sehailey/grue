import Location from '../Location'

class forest3 extends Location {
  NW = props => props.movePlayer('southOfHouse')
  N = props => props.movePlayer('clearing')
  w = props => props.movePlayer('forest1')
  S = props => props.addLog('Storm-tossed trees block your way.')
  SE = props => props.addLog('The rank undergrowth prevents eastward movement.')
}
export default forest3
