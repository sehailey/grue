import Container from '../classes/Container'
import Surface from '../classes/Surface'

class Table extends Surface {
  constructor (data) {
    super(data)
  }

  get items () {
    return this._items.items
  }

  get visibleInvItems () {
    return this._items.visibleInvItems
  }

  open () {
    return { log: 'How does one do that to a table?' }
  }

  close () {
    return { log: 'How does one do that to a table?' }
  }

  examine () {
    const items = this._items.invItems.map(item => item.dName).join('\n')
    return { log: `Sitting on the table is:\n${items}` }
  }
}

export default Table
