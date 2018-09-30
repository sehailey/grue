import {OBJECT} from '../../classes'
const MAILBOX = new OBJECT('mailbox')
MAILBOX.pname = 'mailboxes'
MAILBOX.loc = 'house'

MAILBOX.canTake = false
MAILBOX.descriptions = {
    closed: 'The mailbox is closed.',
    open: 'The mailbox is open.',
}

MAILBOX.describe = function() {
    if (!this.isOpen) return this.descriptions.closed
    else return this.descriptions.open
}
MAILBOX.description = MAILBOX.descriptions.closed
MAILBOX.isEmpty = false
MAILBOX.isContainer = true

MAILBOX.OPEN = function() {
    this.isOpen = true
    this.description = this.descriptions.open
    return 'You open the mailbox.'
}

MAILBOX.CLOSE = function() {
    this.isOpen = false
    this.description = this.descriptions.closed
    return 'You close the mailbox.'
}

MAILBOX.TAKE = function() {
    return 'It is securely anchored.'
}

export default MAILBOX
