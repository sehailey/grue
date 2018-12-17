import Location from '../'

class behindHouse extends Location {
  constructor (data) {
    super(data)

    this.window = { name: 'window', open: false }
  }

  openWindow () {}

  closeWindow () {}
}

export default behindHouse
