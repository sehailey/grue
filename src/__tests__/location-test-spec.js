import Location from '../components/Location'
import { Item, Container } from '../components/Items'
const expect = require('chai').expect

const loc = { name: 'testLoc', description: 'This is a test loc', items: [] }
const item1 = { name: 'item1', description: 'this is an item' }
const container1 = { name: 'container1', description: 'this is a container' }
describe('Location', () => {
  describe('addItem', () => {
    let location, item, container
    beforeEach(() => {
      location = new Location(loc)
      item = new Item(item1)
      container = new Container(container1)
    })

    it('look', () => {
      console.log(location)
      const result = location.look()
      expect(result).to.equal(loc.description)
    })
    it('takes an item and adds it to the location, and returns the new itemset', () => {
      const items = location.drop({ name: 'item' })
      expect(items.length).to.equal(1)
    })
    it('drop', () => {
      const items = location.drop(item)
      expect(items.length).to.equal(1)
    })

    it('take', () => {
      location.drop(item1)
      const item = location.take('item1')
      expect(item.name).to.equal('item1')
    })
    it('takes items even if they\'re inside of a container', () => {
      container.open()
      container.addItem(item1)
      location.drop(container)
      const item = location.take('item1')
      expect(item.name).to.equal('item1')
    })
  })
})
