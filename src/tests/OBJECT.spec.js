const assert = require('chai').assert
const OBJECT = require('../components/classes/OBJECT').default

describe('OBJECT', () => {
    it('returns a string', () => {
        const letter = new OBJECT('letter', 'a letter', 'letters')
        for (let key in letter) {
            if (
                letter.hasOwnProperty(key) &&
                typeof letter[key] === 'function'
            ) {
                const test = letter[key]()
                assert.isString(test)
            }
        }
    })
})
