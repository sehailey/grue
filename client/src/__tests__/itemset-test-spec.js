import { ItemSet, Item, InvItem, Container, Surface } from '../components/Items'
const expect = require('chai').expect
const bgItem = new Item({
  name: 'bgItem',
  description: 'you should not be able to take this item',
  isInv: false
})
const itemInsideContainer = new InvItem({
  name: 'itemInsideContainer',
  description: 'this item should be visible when its parent container is open',
  isInv: true
})
const invItem = new InvItem({
  name: 'invItem',
  description: 'this is an invItem in the loc',
  isInv: true
})
const container = new Container({
  name: 'container',
  description: 'this is a test container in the loc',
  items: [itemInsideContainer],
  isInv: false,
  isOpen: true
})
const itemOnASurface = new InvItem({
  name: 'itemOnASurface',
  description: 'this is for the surface',
  isInv: true
})
const surface = new Surface({
  name: 'surface',
  description: 'you should not be able to take this item',
  isInv: false,
  isSurface: true,
  items: [itemOnASurface]
})

describe('ItemSet', () => {
  let itemset
  beforeEach(() => {
    itemset = new ItemSet([surface, container, bgItem, invItem])
  })

  it('visibleItems returns items in a loc plus items in an open container', () => {
    expect(itemset.visibleItems.length).to.equal(6)
  })

  it('findVisibleInvItems finds invtems in a loc plus items in an open container', () => {
    expect(itemset.visibleInvItems.length).to.equal(3)
  })

  describe('findItem', () => {
    beforeEach(() => {
      itemset = new ItemSet([surface, container])
    })

    it(' _findItemsInOpenContainers should return an array', () => {
      const result = itemset._findItemsInOpenContainers()
      expect(result)
        .to.be.an('array')
        .with.length(1)
    })

    it(' _findItemsOnSurfaces should return an array', () => {
      const result = itemset._findItemsOnSurfaces()
      expect(result)
        .to.be.an('array')
        .with.length(1)
    })
    it('returns an item even if it\'s in a container', () => {
      const result = itemset.findItem(itemInsideContainer.name)
      expect(result.name).to.equal(itemInsideContainer.name)
    })

    it('returns an item even if it\'s in on a surface', () => {
      const result = itemset.findItem(itemOnASurface.name)
      expect(result.name).to.equal(itemOnASurface.name)
    })

    it('does not return an item if it\'s inside of a closed container', () => {
      container.close()
      const result = itemset.findItem(itemInsideContainer.name)
      expect(result).to.equal(undefined)
    })
  })
})
