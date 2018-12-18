import { Item } from '../classes'
import { impossibleAction } from '../functions'
class table extends Item {
  TAKE = props => props.AddLog(impossibleAction())
}

export default table
