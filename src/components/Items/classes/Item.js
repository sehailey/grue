class Item {
  constructor (data) {
    this.id = data.id
    this._name = data.name
    this.aName = 'a ' + data.name
    this.pName = data.name + 's'
    this.loc = data.loc
    this.description = data.description
  }

  get name () {
    return this._name
  }
  take () {
    return { log: `You can't take the ${this.name}` }
  }

  drop () {
    return { log: 'You don\'t have that!' }
  }

  examine () {
    return { log: this.description }
  }

  read () {
    return { log: `How does one read a ${this.name}?` }
  }
}

export default Item
