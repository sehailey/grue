import {ROOM} from '../classes'
import {TORCH} from '../items'

const OUTSIDE = new ROOM('outside')
OUTSIDE.description =
    'You find yourself outside. To the east you see an cave. To the north you see a path. '

OUTSIDE.contains.push(TORCH)

export default OUTSIDE
