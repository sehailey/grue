class Item {
  constructor ({ id, name, description, loc, isInvItem, isContainer, isLit }) {
    this.id = id
    this.name = name
    this.aName = 'a ' + name
    this.pName = name + 's'
    this.loc = loc
    this.description = description
    this.isInvItem = isInvItem
    this.isContainer = isContainer
    this.isLit = isLit
  }
  describe = () => {
    return this.description
  }

  EXAMINE = props => {
    props.addLog(this.describe())
  }
}

export default Item
