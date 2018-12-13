const defaultResult = { log: 'You can\'t go that way', loc: null }

class Compass {
  constructor () {
    this.N = defaultResult
    this.S = defaultResult
    this.E = defaultResult
    this.W = defaultResult
    this.NW = defaultResult
    this.NE = defaultResult
    this.SW = defaultResult
    this.SE = defaultResult
    this.U = defaultResult
    this.D = defaultResult
  }

  addLoc (direction, loc) {
    this[direction] = { log: loc.description, loc }
    return this[direction]
  }

  addLog (direction, log) {
    this[direction].log = log
    return this[direction]
  }
}

export default Compass
