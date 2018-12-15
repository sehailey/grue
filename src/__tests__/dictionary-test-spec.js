import Dictionary from '../components/Dictionary'
const expect = require('chai').expect
const dictionary = new Dictionary()

describe('Dictionary', () => {
  describe('isVerb', () => {
    it('returns true if the word is a verb and false if it isn\'t', () => {
      expect(dictionary.isVerb('tAke')).to.equal(true)
      expect(dictionary.isVerb('mailbox')).to.equal(false)
    })
  })

  describe('isDirection', () => {
    it('returns true if the word is a direciion', () => {
      expect(dictionary.isDirection('N')).to.equal(true)
      expect(dictionary.isDirection('U')).to.equal(true)
      expect(dictionary.isDirection('take')).to.equal(false)
    })
  })

  describe('isItem', () => {
    it('returns true if the word is an item', () => {
      expect(dictionary.isItem('MaIlBox')).to.equal(true)
    })
  })

  describe('isInv', () => {
    it('returns true if the word is related to inventory', () => {
      expect(dictionary.isInv('Inv')).to.equal(true)
      expect(dictionary.isInv('i')).to.equal(true)
    })
  })

  describe('isLook', () => {
    it('returns true if the word is look', () => {
      expect(dictionary.isLook('l')).to.equal(true)
      expect(dictionary.isLook('look')).to.equal(true)
    })
  })

  describe('isUnknown', () => {
    it('returns true if the word is an item', () => {
      expect(dictionary.isUnknown('asdfasd')).to.equal(true)
    })
  })
})
