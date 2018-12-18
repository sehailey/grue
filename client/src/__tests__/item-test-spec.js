import itemConstructors from '../components/Items/constructors'
import Mailbox from '../components/Items/items/mailbox'
import Leaflet from '../components/Items/items/leaflet'
import Sack from '../components/Items/items/sack'
import Table from '../components/Items/items/table'
const expect = require('chai').expect

const mb = itemConstructors.find(item => item.name === 'mailbox')
const lf = itemConstructors.find(item => item.name === 'leaflet')
const sa = itemConstructors.find(item => item.name === 'sack')
const tb = itemConstructors.find(item => item.name === 'sack')

let debug = false

describe('Item', () => {
  let item
  beforeEach(() => {
    item = new Mailbox(mb)
  })

  xit('every game method returns an object with a log and the item as a result (if it changed)', () => {
    expect(item.take()).to.have.any.keys('log')
    expect(item.drop()).to.have.any.keys('log')
  })
})

describe('InvItem', () => {
  let mailbox, leaflet, sack, table
  beforeEach(() => {
    mailbox = new Mailbox(mb)
    sack = new Sack(sa)
    leaflet = new Leaflet(lf)
    table = new Table(tb)
  })

  xit('every game method returns an object with a log and the item as a result (if it changed)', () => {
    expect(sack.take()).to.have.any.keys('log')
    expect(mailbox.take()).to.have.any.keys('log')
    expect(leaflet.take()).to.have.any.keys('log')
    expect(table.take()).to.have.any.keys('log')
  })

  xit('invItems can be taken', () => {
    expect(sack.take().log).to.equal('Taken.')
  })
})

describe('Container', () => {
  let mailbox, sack, leaflet
  beforeEach(() => {
    mailbox = new Mailbox(mb)
    leaflet = new Leaflet(lf)
    sack = new Sack(sa)

    mailbox.isOpen = false
    sack.isOpen = true
    sack.items = [leaflet]
    mailbox.items = [sack]
  })

  it('DEBUG', () => {
    if (debug) {
      console.log('*************************')
      console.log('     DEBUG               ')
      console.log('*************************')
      console.log('mailbox.items: ', typeof mailbox.items, mailbox.items)
      console.log('mailbox.itemset: ', typeof mailbox.itemset, mailbox.itemset)
      console.log(
        'mailbox.itemset.items: ',
        typeof mailbox.itemset.items,
        mailbox.itemset.items
      )
      console.log('*************************')
    }
  })

  it('Container methods return log objects', () => {
    expect(mailbox.open()).to.have.any.keys('log')
    expect(mailbox.close()).to.have.any.keys('log')
  })

  it('invItems contains all invItems at one level deep', () => {
    mailbox.isOpen = true
    expect(mailbox.invItems.length).to.equal(1)
  })

  it('visibleInvItems contains all invItems in containers as well', () => {
    mailbox.isOpen = true
    //console.log(mailbox.visibleInvItems.map(item => item.name))
    expect(mailbox.visibleInvItems.length).to.equal(2)
  })

  it('open returns the container with isOpen = true', () => {
    const result = mailbox.open()
    const item = result.item
    expect(item).to.equal(mailbox)
    expect(item.isOpen).to.equal(true)
  })

  it('logs the contents of what\'s in the container', () => {
    mailbox.isOpen = false
    const { log, item } = mailbox.open()
    expect(log).to.equal('Opening the small mailbox reveals a sack.')
    expect(item).to.equal(mailbox)
    expect(item.isOpen).to.equal(true)
    const items = item.items
    //console.log(items.map(itm => itm.name))
    expect(items.length).to.equal(1)
  })

  xit('if the container is open it returns its items', () => {
    mailbox.isOpen = false
    expect(mailbox.items.length).to.equal(0)
    mailbox.isOpen = true
    expect(mailbox.items.length).to.equal(2)
  })

  it('if container is closed it returns this as a log', () => {
    mailbox.isOpen = false
    const result = mailbox.addItem(leaflet)
    expect(result.log).to.equal('The mailbox is closed.')
    expect(result.item).to.equal(undefined)
  })

  it('when opened, it allows you to put objects in it.', () => {
    mailbox.open()
    expect(mailbox.addItem(leaflet).log).to.equal(
      `You put the ${leaflet.name} in the ${mailbox.name}.`
    )
  })
})
describe('Surface', () => {
  let table, leaflet
  beforeEach(() => {
    table = new Table(tb)
    leaflet = new Leaflet(lf)
    table._addItem(leaflet)
  })

  it('takes items from surface during take', () => {
    const result = table.findItem('leaflet')
    expect(result.name).to.equal(leaflet.name)
  })
})
