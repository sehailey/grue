import Player from '../components/Player'

const expect = require('chai').expect
const player = new Player({
  name: 'notnull',
  inv: [{ name: 'testItem', isInv: true }]
})

describe('player', () => {
  it('player.findItem(itemName) should return true if the player has the item (and it\'s visible)', () => {
    console.log(player.inv)
    const result = player.findItem('testItem')
    expect(result).to.equal(true)
    expect(player.hasItem('mailbox')).to.equal(false)
  })
  xit('hasItem should return true if the player has the item (and it\'s visible)', () => {
    console.log(player.inv)
    const result = player.findItem('testItem')
    expect(result).to.equal(true)
    expect(player.hasItem('mailbox')).to.equal(false)
  })

  xit('player drop', () => {
    const result = player.findItem('testItem')
    expect(result.name).to.equal('testItem')
    expect(player.inv.length).to.equal(1)
    player.drop('testItem')
    expect(player.inv.length).to.equal(0)
  })
})
