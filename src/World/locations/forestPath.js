import Location from '../Location'

class forestPath extends Location {
  U = props => props.movePlayer('upTree')
  S = props => props.movePlayer('northOfHouse')
  N = props => props.movePlayer('clearing')
}
export default forestPath
