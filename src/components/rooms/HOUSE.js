import {ROOM} from '../classes'
import {MAILBOX} from '../items'

const HOUSE = new ROOM('house')
HOUSE.description =
    'You\'re standing outside of a house. You see a mailbox off to the side.'

HOUSE.contains = [MAILBOX]

export default HOUSE
