import { InvItem } from '../../classes'

class letter extends InvItem {
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
      'Dear JZ,\nAgriculture ended a vast period of human existence largely characterized by freedom from work, non-exploitation of nature, considerable gender autonomy and equality, and the absence of organized violence. It takes more from the earth than it puts back and is the foundation of private property. Agriculture encloses, controls, exploits, establishes hierarchy and resentment. Chellis Glendinning (1994) described agriculture as the “original trauma” that has devastated the human psyche, social life, and the biosphere.\nSincerely, Adam Lanza'
    )
  }

  BURN = props => {
    this.loc = null
    props.addLog('The letter burns and the ashes blow away in the wind.')
    return true
  }
}

export default letter
