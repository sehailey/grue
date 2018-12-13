import Location from '../Location'

class upTree extends Location {
  D = props => props.movePlayer('forestPath')

  U = props => props.addLog('You can\'t go any higher')
}

export default upTree
