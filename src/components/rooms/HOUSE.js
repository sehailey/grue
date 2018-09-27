import {ROOM} from '../classes'
import {MAILBOX, LETTER} from '../items'

const HOUSE = new ROOM('house')
HOUSE.description =
    'You\'re standing outside of a house. You see a mailbox off to the side.'

MAILBOX.contains.push(LETTER)
HOUSE.MAILBOX = MAILBOX

export default HOUSE
