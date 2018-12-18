import Location from '../'

class kitchen extends Location {
  describe = () => {
    let winStatus, bottleStatus, sackStatus
    const win = this.items.find(item => item.name === 'window')
    const table = this.items.find(item => item.name === 'table')
    const tableItems = table.items
    const sack = tableItems.find(item => item.name === 'sack')
    const bottle = tableItems.find(item => item.name === 'bottle')
    winStatus = win.isOpen ? 'open' : 'closed'
    sackStatus = sack ?
      'On the table is an elongated brown sack, smelling of hot peppers.' :
      ''
    bottleStatus = bottle ?
      'A bottle is sitting on the table.\nThe glass bottle contains:\nA quantity of water' :
      ''

    return `You are in the kitchen of the white house. A table seems to have been used recently for the preparation of food. A passage leads to the west and a dark staircase can be seen leading upward. A dark chimney leads down and to the east is a small window which is ${winStatus}.\n${sackStatus}\n${bottleStatus}`
  }

  moveEast () {
    const win = this.itemset.find(item => item.name === 'window')['isOpen']
    console.log(win)
    if (win) return this.compass['E']
    return { log: 'The window is closed' }
  }

  move (direction) {
    if (direction === 'e') return this.moveEast()
    else return this.compass[direction.toUpperCase()]
  }

  look () {
    return this.describe()
  }
}
export default kitchen
