import { ItemSet } from '../Items'
class Player {
  constructor ({ name, inv, score, moves }) {
    this.name = name
    this._inv = new ItemSet(inv)
    this.score = score
    this.moves = moves
    this.alive = true
  }
  get inv () {
    return this._inv.items
  }
  isAlive () {
    return this.alive
  }
  getInv () {
    return this._inv
  }

  listInv () {
    if (this._inv.countItems() === 0) return { log: 'You are empty-handed.' }
    const result = this.inv.map(item => item.aName).join('\n')
    let log = 'You are carrying:\n' + result
    return { log }
  }

  addToInv (item) {
    return this._inv.addItem(item)
  }

  drop (item) {
    return this._inv.removeItem(item)
  }

  hasItem (item) {
    return this._inv.hasItem(item)
  }

  findItem (item) {
    return this._inv.findItem(item)
  }
}

export default Player
