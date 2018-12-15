import { ItemSet, Item, Container } from '../components/Items'
const expect = require('chai').expect

describe('ItemSet', () => {
  let items, item, item2, container

  beforeEach(() => {
    items = new ItemSet([])
    item = new Item({ name: 'testItem1', description: 'this is a test item' })
    item2 = new Item({
      name: 'testItem2',
      description: 'this is a test item'
    })
    container = new Container({
      name: 'container',
      description: 'this is a test container'
    })
  })

  it('addItem takes an item and adds it to the items array', () => {
    const result = items.addItem(item)
    expect(result.length).to.equal(1)
    expect(items.countItems()).to.equal(1)
  })

  it('removeItem removes an item from the item array', () => {
    const newItems = new ItemSet([item, item2, container])
    expect(newItems.countItems()).to.equal(3)
    newItems.removeItem('testItem')
    expect(newItems.countItems()).to.equal(2)
  })

  // this will depend on Item

  // const result = container.findItem('testItem2').name
  // expect(result).to.equal('testItem2')
  // //items.addItem(item)
  // items.addItem(container)
  // const result2 = items.findItem('container')
  // expect(result2.name).to.equal('container')
})
