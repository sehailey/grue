import { Item, Container } from '../components/Items'
const expect = require('chai').expect

const item1 = { name: 'item1', description: 'This is a test item' }
const item2 = { name: 'item2', description: 'This is a test item' }
const container1 = {
  name: 'container',
  description: 'This is a test container'
}
//const testItem3 = { name: 'testItem3', description: 'This is a test item' }

describe('Item', () => {
  let item, container
  beforeEach(() => {
    item = new Item(item1)
    container = new Container(container1)
  })

  it('describe returns the item description', () => {
    expect(item.describe()).to.equal(item.description)
  })

  describe('container', () => {
    beforeEach(() => {
      item = new Item(item1)
      container = new Container(container1)
    })

    it('if the container is open it returns its items, otherwise it returns null(?)', () => {
      expect(container.open().log).to.equal(`You open the ${container.name}`)
    })

    it('if container is closed it returns this as a log', () => {
      expect(container.addItem(item2).log).to.equal('The container is closed.')
      container.open()
      expect(container.addItem(item2).log).to.equal(
        'You put the item2 in the container.'
      )
    })
  })
})
