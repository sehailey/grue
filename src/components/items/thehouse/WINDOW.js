import {OBJECT} from '../../classes'
const WINDOW = new OBJECT('window')

WINDOW.loc = 'behindHouse'
WINDOW.isBarrier = true
WINDOW.OPEN = () => 'You open the window.'

export default WINDOW
