import Location from '../'

class behindHouse extends Location {
  constructor (data) {
    super(data)
  }

  windowIsOpen () {
    const window = this.items.find('window')
    return window.isOpen
  }

  openWindow () {
    // const win = this.findItem('window')
    console.log(this.items)
    // return win.open()
    //console.log(win)
  }

  // closeWindow () {
  //   const window = this.items.find('window')
  //   return window.close()
  // }

  moveWest () {
    const win = this.items.find(item => item.name === 'window')['isOpen']
    if (win) return this.compass['W']
    return { log: 'The window is closed' }
  }

  move (direction) {
    if (direction === 'w') return this.moveWest()
    else return this.compass[direction.toUpperCase()]
  }
}

export default behindHouse
