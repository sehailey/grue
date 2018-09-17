export const Item = class Item {
  constructor(name) {
    this.name = name
    this.plural = name
    this.aOrAn = ["a ", name].join()
    return ["It's ", this.aOrAn, "."].join()
  }

  examine() {
    return this.description
  }

  take() {
    return "You take the " + this.name + "."
  }

  drop() {
    return "You take the " + this.name + "."
  }
}

export const Torch = class Torch extends Item {
  constructor() {
    super()
    this.name = "torch"
    this.plural = "torches"
    this.aOrAn = "a torch"
    this.description = "It's a torch"
  }
}
