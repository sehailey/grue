import itemConstructors from '../components/Items/constructors'
import Mailbox from '../components/Items/items/mailbox'
import Leaflet from '../components/Items/items/leaflet'
import Sack from '../components/Items/items/sack'
const expect = require('chai').expect

const mb = itemConstructors.find(item => item.name === 'mailbox')
const lf = itemConstructors.find(item => item.name === 'leaflet')
const sa = itemConstructors.find(item => item.name === 'sack')

describe('Item', () => {
  let item
  beforeEach(() => {
    item = new Mailbox(lf)
  })

  it('every game method returns an object with a log and the item as a result (if it changed)', () => {
    expect(item.take()).to.have.any.keys('log')
    expect(item.drop()).to.have.any.keys('log')
  })
})

describe('InvItem', () => {
  let mailbox, leaflet, sack
  beforeEach(() => {
    mailbox = new Mailbox(mb)
    sack = new Sack(sa)
    leaflet = new Leaflet(lf)
  })

  it('every game method returns an object with a log and the item as a result (if it changed)', () => {
    expect(sack.take()).to.have.any.keys('log')
    expect(sack.drop()).to.have.any.keys('log')
  })

  it('invItems can be taken', () => {
    expect(sack.take().log).to.equal('Taken.')
  })
})

describe('container', () => {
  let mailbox, sack, leaflet
  beforeEach(() => {
    mailbox = new Mailbox(mb)
    leaflet = new Leaflet(lf)
    sack = new Sack(sa)
    mailbox.items = [leaflet, sack]
  })

  it('Container methods return log objects', () => {
    expect(mailbox.open()).to.have.any.keys('log')
    expect(mailbox.close()).to.have.any.keys('log')
  })

  it('open returns the container with isOpen = true', () => {
    const { log, item } = mailbox.open()

    expect(item).to.equal(mailbox)
    expect(item.isOpen).to.equal(true)
    const items = item.getItems()
    expect(items.length).to.equal(2)
  })

  it('logs the contents of what\'s in the container', () => {
    const { log, item } = mailbox.open()
    expect(log).to.equal(
      'Opening the small mailbox reveals a leaflet and a sack.'
    )
    expect(item).to.equal(mailbox)
    expect(item.isOpen).to.equal(true)
    const items = item.getItems()
    expect(items.length).to.equal(2)
  })

  it('if the container is open it returns its items', () => {
    expect(mailbox.items.length).to.equal(0)
    mailbox.open()
    expect(mailbox.items.length).to.equal(2)
  })

  it('if container is closed it returns this as a log', () => {
    const result = mailbox.addItem(leaflet)
    expect(result.log).to.equal('The mailbox is closed.')
  })
  it('when opened, it allows you to put objects in it.', () => {
    mailbox.open()
    expect(mailbox.addItem(leaflet).log).to.equal(
      `You put the ${leaflet.name} in the ${mailbox.name}.`
    )
  })
})
