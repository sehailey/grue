import {OBJECT, listItems} from '../classes'
import LETTER from './LETTER'
const MAILBOX = new OBJECT('mailbox', 'a mailbox', 'mailboxes')

MAILBOX.descriptions = {
    closed: 'The mailbox is closed.',
    open: 'The mailbox is open.',
}
MAILBOX.description = MAILBOX.descriptions.closed
MAILBOX.contains.push(LETTER)
MAILBOX.canOpen = true
MAILBOX.OPEN = function() {
    if (this.isOpen) return 'It\'s already open.'
    else {
        this.isOpen = true
        this.description = this.descriptions.open
        return (
            'You open the mailbox. You see ' +
            listItems(this.contains) +
            ' inside.'
        )
    }
}

export default MAILBOX
