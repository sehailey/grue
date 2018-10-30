import { InvItem } from '../../classes'

class leaflet extends InvItem {
  EXAMINE = props => {
    return this.description
  }
  READ = props => {
    if (this.loc !== 'player') {
      this.loc = 'player'
      props.addLog('(Taken)')
      props.updateItem(this)
    }

    props.addLog(
      'WELCOME TO ZORK!\n\nZORK is a game of adventure, danger, and low cunning. In it you will explore some of the most amazing territory ever seen by mortals. No computer should be without one!'
    )
  }
}

export default leaflet
