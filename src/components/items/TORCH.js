import {OBJECT} from '../classes'

const TORCH = new OBJECT('torch', 'a torch', 'torches')
TORCH.descriptions = {
    unlit: 'It\'s a torch. It\'s currently unlit.',
    lit: 'It\'s a torch. It\'s currently lit.',
}
TORCH.description = TORCH.descriptions.unlit

TORCH.canLight = true
TORCH.canTake = true

TORCH.LIGHT = function() {
    if (!this.isInv) {
        return 'You don\'t have that!'
    } else if (this.isLit) return 'It\'s already lit.'
    else {
        this.isLit = true
        this.description = this.descriptions.lit
        return 'You lit the torch.'
    }
}

export default TORCH
