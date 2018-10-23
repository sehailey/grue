import {listItems} from '../classes'

const INV = props => {
    const inv = props.items.filter(item => item.loc === 'player')
    if (inv.length === 0) props.addLog('You are empty-handed.')
    else props.addLog('You are carrying ' + listItems(inv) + '.')
}

export default INV
