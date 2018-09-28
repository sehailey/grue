import {listItems} from '../classes'

const LOOK = props => {
    let visisibleItems = props.items.filter(
        item => item.loc === props.location.name
    )
    let itemDescription = ''
    let itemList = listItems(visisibleItems)

    if (itemList.length > 0) itemDescription = 'You see ' + itemList + ' here.'

    let description = [props.location.description, itemDescription].join(' ')
    props.addLog(description)
}

export default LOOK
