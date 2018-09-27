import {OBJECT} from '../classes'
import LETTER from './LETTER'

const MAILBOX = new OBJECT('mailbox', 'It\'s a pretty basic mailbox')
MAILBOX.contains.push(LETTER)

export default MAILBOX
