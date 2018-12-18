import Item from './Item'

class InvItem extends Item {
  describe = () => {
    return this.description
  }

  EXAMINE = () => {
    return this.describe()
  }

  TAKE = props => {
    if (!this.isInvItem) props.addLog('You can\'t take that!')
    else if (this.loc === 'player') {props.addLog(`You already have the ${this.name}`)} else {
      this.loc = 'player'
      props.addLog('Taken.')
      return true
    }
  }
  //
  DROP = props => {
    if (this.loc === 'player') props.addLog(`You don't have the ${this.name}`)
    else {
      this.loc = props.player.currentLoc
      props.addLog('Dropped.')
      return true
    }
  }
}

export default InvItem
