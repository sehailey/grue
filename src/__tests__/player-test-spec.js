import Player from '../components/Player'

const expect = require('chai').expect
const player = new Player({ name: 'notnull', inv: [{ name: 'testItem' }] })

describe('player', () => {
  it('hasItem should return true if the player has the item (and it\'s visible)', () => {
    const result = player.hasItem('testItem')
    expect(result).to.equal(true)
    expect(player.hasItem('mailbox')).to.equal(false)
  })

  it('player drop', () => {
    const result = player.findItem('testItem')
    expect(result.name).to.equal('testItem')
    expect(player.inv.length).to.equal(1)
    player.drop('testItem')
    expect(player.inv.length).to.equal(0)
  })
})
