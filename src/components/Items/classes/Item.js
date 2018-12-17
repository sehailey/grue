class Item {
  constructor ({ id, name, description, loc }) {
    this.id = id
    this._name = name
    this.aName = 'a ' + name
    this.pName = name + 's'
    this.loc = loc
    this.description = description
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
}

export default Item
