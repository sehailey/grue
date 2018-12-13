class Player {
  constructor ({ name, isAlive, inv, score, moves }) {
    this.name = name
    this.inv = inv
    this.score = score
    this.moves = moves
    this.isAlive = isAlive
  }

  getInv () {
    if (this.inv.length === 0) return 'You are empty handed.'
  }

  addToInv (item) {
    this.inv.push(item)
  }

  filterInv (item) {
    return this.inv.filter(invItem => invItem !== item)
  }

  removeFromInv (item) {
    this.inv = this.filterInv(item)
  }
}

export default Player
