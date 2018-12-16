import Location from '../components/Location'
import { Item, InvItem, Container } from '../components/Items'
const expect = require('chai').expect

const loc = { name: 'testLoc', description: 'This is a test loc', items: [] }
const item1 = { name: 'item1', description: 'this is an item' }
const container1 = {
  name: 'container1',
  description: 'this is a container',
  isOpen: true,
  isInv: true
}
describe('Location', () => {
  describe('addItem', () => {
    let location, item, invItem, container
    beforeEach(() => {
      location = new Location(loc)
      item = new Item(item1)
      invItem = new InvItem(item1)
      container = new Container(container1)
      container.addItem(item)
      location._addItem(invItem)
      location._addItem(container)
    })

    it('look', () => {
      const result = location.look()
      expect(result).to.equal(loc.description)
    })
    it('findItem', () => {
      const itm = location.findItem(item.name)
      expect(itm.name).to.equal(item.name)
    })

    it('finds items even if they\'re inside of a container', () => {
      const item = location.findItem('item1')
      expect(item.name).to.equal('item1')
    })
  })
})
