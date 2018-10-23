class Room {
  constructor({name, title, description, isLit}) {
    this.name = name
    this.title = title
    this.description = description
    this.isLit = isLit
  }

  // this.N = null
  // this.S = null
  // this.E = null
  // this.W = null
  //
  // this.isBlocked = {N: null, S: null, E: null, W: null}
  // this.isLit = true

  describeLocation = () => {
    return this.description
  }
}

export default Room
