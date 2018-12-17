import { ItemSet, Item, InvItem, Container } from '../components/Items'
const expect = require('chai').expect
const bgItem = new Item({
  name: 'bgItem',
  description: 'you should not be able to take this item'
})
const itemInsideContainer = new InvItem({
  name: 'itemInsideContainer',
  description: 'this item should be visible when its parent container is open',
  isInv: true
})
const invItem = new InvItem({
  name: 'invItem',
  description: 'this is an invItem in the loc'
})
const container = new Container({
  name: 'container',
  description: 'this is a test container in the loc',
  items: [itemInsideContainer],
  isOpen: true
})
describe('ItemSet', () => {
  let itemset
  beforeEach(() => {
    itemset = new ItemSet([container, bgItem, invItem])
  })

  it('visibleItems returns items in a loc plus items in an open container', () => {
    expect(itemset.visibleItems.length).to.equal(4)
  })

  it('findVisibleInvItems finds invtems in a loc plus items in an open container', () => {
    expect(itemset.visibleInvItems.length).to.equal(2)
  })
  it('findItem returns an item even if it\'s in a container', () => {
    const result = itemset.findItem(itemInsideContainer.name)
    expect(result.name).to.equal(itemInsideContainer.name)
  })

  it('findItem returns an item even there\'s only one inside of a container', () => {
    const itemset2 = (itemset = new ItemSet([container, bgItem]))
    expect(itemset2.visibleInvItems.length).to.equal(1)
    const result = itemset.findItem(itemInsideContainer.name)
    expect(result.name).to.equal(itemInsideContainer.name)
  })

  it('findItem does not return an item if it\'s inside of a closed container', () => {
    container.close()
    const result = itemset.findItem(itemInsideContainer.name)
    expect(result).to.equal(undefined)
  })
})
