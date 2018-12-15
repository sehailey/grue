import Item from './Item'

class InvItem extends Item {
  constructor (data) {
    super(data)
    this.isInvItem = true
  }
  TAKE = props => {
    if (this.loc === 'player') return 'You already have that!'
    //if (this.loc !== 'currentLoc') return 'You don\'t see that here!'
    if (this.loc === 'here') {
      this.loc = 'player'
      return 'taken.'
    }
  }
}

export default InvItem
