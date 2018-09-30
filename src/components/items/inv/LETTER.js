import {OBJECT} from '../../classes'
const LETTER = new OBJECT('letter')

LETTER.loc = 'mailbox'

LETTER.description = 'It\'s a letter addressed to John Zerzan'
LETTER.isInvItem = true
LETTER.isFlammable = true
LETTER.READ = function() {
    return 'Dear JZ,\nAgriculture ended a vast period of human existence largely characterized by freedom from work, non-exploitation of nature, considerable gender autonomy and equality, and the absence of organized violence. It takes more from the earth than it puts back and is the foundation of private property. Agriculture encloses, controls, exploits, establishes hierarchy and resentment. Chellis Glendinning (1994) described agriculture as the “original trauma” that has devastated the human psyche, social life, and the biosphere.\nSincerely, Adam Lanza'
}
LETTER.BURN = function() {
    this.loc = null
    return 'The letter burns and the ashes blow away in the wind.'
}
export default LETTER
