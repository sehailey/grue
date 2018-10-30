// These are used for seeding the database.
module.exports = [
  {
    name: 'leaflet',
    description:
      'WELCOME TO ZORK!\n\nZORK is a game of adventure, danger, and low cunning. In it you will explore some of the most amazing territory ever seen by mortals. No computer should be without one!',
    loc: 'mailbox',
    isInvItem: true
  },
  {
    name: 'egg',
    description: 'The jewel-encrusted egg is closed.',
    loc: 'upTree',
    isInvItem: true,
    isContainer: true,
    isOpen: false
  },
  {
    name: 'mailbox',
    description: 'It\'s an ordinary looking mailbox.',
    loc: 'westOfHouse',
    isContainer: true
  },
  {
    name: 'house',
    description: 'It\'s an ordinary looking house.',
    loc: 'westOfHouse'
  },
  {
    name: 'window',
    description: 'It\'s an ordinary looking window.',
    loc: 'behindHouse'
  }
]
