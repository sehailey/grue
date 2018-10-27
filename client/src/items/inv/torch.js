import { Item } from '../../classes'

const torch = torch => new Item(torch)
torch.isInvItem = true
torch.isLit = false

torch.BURN = function (fire) {
  if (this.isLit === false) {
    this.isLit = true
    this.description = 'It\'s a torch. It is currently lit.'
    return 'You lit the torch.'
  }
}

export default torch
