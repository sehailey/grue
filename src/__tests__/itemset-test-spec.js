import { ItemSet, Item, InvItem, Container } from '../components/Items'
const expect = require('chai').expect
const bgItem = new Item({
  name: 'bgItem',
  description: 'you should not be able to take this item'
})
const itemInsideContainer = new Item({
  name: 'itemInsideContainer',
  description: 'this item should be visible when its parent container is open'
})
const invItem = new InvItem({
  name: 'invItem',
  description: 'this is an invItem in the loc'
})
const container = new Container({
  name: 'container',
  description: 'this is a test container in the loc',
  items: new ItemSet([itemInsideContainer]),
  isOpen: true
})
describe('ItemSet', () => {
  let itemset
  beforeEach(() => {
    itemset = new ItemSet([container, bgItem, invItem])
  })

  it('findVisibleItems finds items in a loc plus items in an open container', () => {
    console.log('**********', itemset)
    const result = itemset.findVisibleItems()
    console.log('visibleItems:', result.map(item => item.name))
    expect(result.length).to.equal(4)
  })

  it('findItem returns an item even if it\'s in a container', () => {
    const result = itemset.findItem(itemInsideContainer.name)
    expect(result.name).to.equal(itemInsideContainer.name)
  })
})
