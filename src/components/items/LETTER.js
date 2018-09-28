import {OBJECT} from '../classes'
const LETTER = new OBJECT('letter', 'a letter', 'letters')
LETTER.description = 'It\'s a letter addressed to John Zerzan'
LETTER.canTake = true

LETTER.LIGHT = function(props, item = null) {
    if (!item.isLit) {
        return 'You need to light it with something on fire.'
    } else {
        props.removeItemFromTnv(this)
        return 'The letter rapidly burns.'
    }
}

LETTER.READ = function(item = null) {
    return 'The letter reads:\nDear Sir or Madam,\nAgriculture ended a vast period of human existence largely characterized by freedom from work, non-exploitation of nature, considerable gender autonomy and equality, and the absence of organized violence. It takes more from the earth than it puts back and is the foundation of private property. Agriculture encloses, controls, exploits, establishes hierarchy and resentment. Chellis Glendinning (1994) described agriculture as the “original trauma” that has devastated the human psyche, social life, and the biosphere.\nSincerely,\nAdam Lanza'
}

export default LETTER
