class Item {
  constructor ({ id, name, description, loc }) {
    this.id = id
    this.name = name
    this.aName = 'a ' + name
    this.pName = name + 's'
    this.loc = loc
    this.description = description
  }

  TAKE = props => {
    return `You can't take the ${this.name}`
  }
}

export default Item
