import {OBJECT, listItems} from '../classes'
import LETTER from './LETTER'

const MAILBOX = new OBJECT('mailbox', 'a mailbox', 'mailboxes')
MAILBOX.descriptions = {
    closed: 'The mailbox is closed.',
    open: 'The mailbox is open.',
}
MAILBOX.description = MAILBOX.descriptions.closed

MAILBOX.canOpen = true
MAILBOX.OPEN = () => {
    if (this.isOpen) return 'It\'s already open.'
    else {
        this.isOpen = true
        return (
            'You open the mailbox. You see ' +
            listItems(this.contains) +
            ' inside.'
        )
    }
}
MAILBOX.contains.push(LETTER)

export default MAILBOX
