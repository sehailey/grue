import { Torch } from "./items"

export const Room = class Room {
  constructor(name) {
    this.name = name
    this.description = ""
    this.n = null
    this.s = null
    this.e = null
    this.w = null
    this.contains = {}
  }

  describeItems() {
    let items = []
    for (let key in this.contains) {
      if (this.contains.hasOwnProperty(key) && !this.contains[key].hidden) {
        items.push(this.contains[key].aOrAn)
      }
    }
    return items.length > 0
      ? "There is " +
          items.slice(0, items.length).join(", ") +
          ", and " +
          items.slice(items.lenth - 2) +
          " here."
      : null
  }
  describeRoom() {
    return this.description
  }
}

export const Cave = class Cave extends Room {
  constructor() {
    super()
    this.name = "cave"
    this.description =
      "It is pitch black. You are likely to be eaten by a grue."
  }
}

export const Outside = class Outside extends Room {
  constructor() {
    super()
    this.name = "outside"
    this.description = "You're outside."
    this.contains = { torch: new Torch() }
  }
}

const cave = new Cave()
const outside = new Outside()

cave.w = outside
outside.e = cave

export const Map = class Map {
  constructor() {
    this.currentLoc = cave
    this.rooms = [cave, outside]
  }

  move(direction) {
    if (!this.currentLoc[direction]) {
      return "You can't go that way."
    }
    this.currentLoc = this.currentLoc[direction]
  }
}
