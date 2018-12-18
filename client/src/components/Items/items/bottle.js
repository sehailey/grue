import { Container } from '../classes'
class bottle extends Container {
  constructor (data) {
    super(data)
    this.items = [{ name: 'water' }]
    this.isInv = true
  }
}
export default bottle
