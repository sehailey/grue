import Location from '../'

class behindHouse extends Location {
  windowIsOpen () {
    return this.items.find(item => item.name === 'window')['isOpen']
  }

  moveWest () {
    const win = this.items.find(item => item.name === 'window')['isOpen']
    if (win) return this.compass['W']
    return { log: 'The window is closed.' }
  }

  move (direction) {
    if (direction === 'w') return this.moveWest()
    else return this.compass[direction.toUpperCase()]
  }

  look () {
    const winStatus = this.windowIsOpen() ? 'open' : 'slightly ajar'
    return `You are behind the white house. A path leads into the forest to the east. In one corner of the house there is a small window which is ${winStatus}.`
  }
}

export default behindHouse
