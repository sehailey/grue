import Location from '../'

class kitchen extends Location {
  describe = () => {
    let winStatus
    const win = this.items.find(item => item.name === 'window')
    if (win.isOpen) winStatus = 'open'
    else winStatus = 'closed'
    return `You are in the kitchen of the white house. A table seems to have been used recently for the preparation of food. A passage leads to the west and a dark staircase can be seen leading upward. A dark chimney leads down and to the east is a small window which is ${winStatus}.\nOn the table is an elongated brown sack, smelling of hot peppers.\nA bottle is sitting on the table.\nThe glass bottle contains:\nA quantity of water`
  }
  moveEast () {
    const win = this.items.find(item => item.name === 'window')['isOpen']
    console.log(win)
    if (win) return this.compass['E']
    return { log: 'The window is closed' }
  }

  move (direction) {
    if (direction === 'e') return this.moveEast()
    else return this.compass[direction.toUpperCase()]
  }
}
export default kitchen
