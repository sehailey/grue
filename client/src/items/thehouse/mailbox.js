import { Item } from '../../classes'
const mailbox = mailbox => new Item(mailbox)
mailbox.pname = 'mailboxes'

// mailbox.canTake = false
// mailbox.isContainer = true

// mailbox.description = mailbox.descriptions.closed
//
// mailbox.OPEN = function () {
//   this.isOpen = true
//   this.description = this.descriptions.open
//   return 'You open the mailbox.'
// }
//
// mailbox.CLOSE = function () {
//   this.isOpen = false
//   this.description = this.descriptions.closed
//   return 'You close the mailbox.'
// }
//
// mailbox.TAKE = function () {
//   return 'It is securely anchored.'
// }

export default mailbox
