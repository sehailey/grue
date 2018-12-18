import Container from '../classes/Container'
import Surface from '../classes/Surface'

class Table extends Surface {
  constructor (data) {
    super(data)
  }

  open () {
    return { log: 'How does one do that to a table?' }
  }

  close () {
    return { log: 'How does one do that to a table?' }
  }

  examine () {
    console.log(this.invItems)
    const items = this.invItems.map(item => item.dName).join('\n')
    return { log: `Sitting on the table is:\n${items}` }
  }
}

export default Table
