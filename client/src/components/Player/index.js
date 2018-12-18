import { ItemSet } from '../Items'
class Player {
  constructor (data) {
    this.name = data.name
    this._inv = new ItemSet(data.items)
    this.score = data.score
    this.moves = data.moves
    this.alive = true
  }
  get inv () {
    return this._inv.items
  }

  set inv (newItems) {
    this._inv.items = newItems
  }
  isAlive () {
    return this.alive
  }

  listInv () {
    if (this.inv.length === 0) return { log: 'You are empty-handed.' }
    console.log(this._inv)
    const result = this.inv.map(item => item.aName).join('\n')
    console.log(result)
    let log = 'You are carrying:\n' + result
    return { log }
  }

  addToInv (item) {
    return this._inv.addItem(item)
  }

  drop (item) {
    console.log(item, this._inv)
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
