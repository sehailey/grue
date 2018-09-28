import {OBJECT} from '../classes'

const TORCH = new OBJECT('torch')

TORCH.loc = 'outside'

TORCH.canLight = true
TORCH.canTake = true

TORCH.LIGHT = function() {
    if (!this.isInv) {
        return 'You don\'t have that!'
    } else if (this.isLit) return 'It\'s already lit.'
    else {
        this.isLit = true
        return 'You lit the torch.'
    }
}

export default TORCH
