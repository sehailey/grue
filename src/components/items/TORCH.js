import {OBJECT} from '../classes'

const TORCH = new OBJECT('torch', 'a torch', 'torches')
TORCH.canLight = true
TORCH.canTake = true

TORCH.LIGHT = function() {
    if (!this.isInv) {
        console.log('WHY IS THIS NOT ISINV', this, this.isInv)
        return 'You don\'t have that!'
    } else if (this.isLit) return 'It\'s already lit.'
    else {
        this.isLit = true
        return 'You lit the torch'
    }
}

export default TORCH
