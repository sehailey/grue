import {OBJECT} from '../../classes'

const TORCH = new OBJECT('torch')
TORCH.descriptions = {
    unlit: 'It\'s a torch. It is currently unlit.',
    lit: 'It\'s a torch. It is currently lit.',
}

TORCH.isInvItem = true
TORCH.description = TORCH.descriptions.unlit

TORCH.loc = 'outside'

TORCH.isFlammable = true
TORCH.canTake = true

TORCH.BURN = function() {
    if (!this.loc === 'player') {
        return 'You don\'t have that!'
    } else if (this.isLit) return 'It\'s already lit.'
    else {
        this.isLit = true
        this.description = this.descriptions.lit
        return 'You lit the torch.'
    }
}

export default TORCH
