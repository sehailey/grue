class Item {
  constructor ({ id, name, description, loc }) {
    this.id = id
    this.name = name
    this.aName = 'a ' + name
    this.pName = name + 's'
    this.loc = loc
    this.description = description
  }

  take () {
    return { log: `You can't take the ${this.name}` }
  }

  drop () {
    return { log: 'You don\'t have that!' }
  }

  examine () {
    return this.description
  }
}

export default Item
