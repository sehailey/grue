import {listItems} from '../classes'

const LOOK = props => {
    let itemsInCurrentLoc = props.items.filter(
        item => item.loc === props.location.name
    )

    let invItemsInCurrentLoc = itemsInCurrentLoc.filter(item => item.isInvItem)

    let containers = itemsInCurrentLoc.filter(
        item => item.isContainer && item.isOpen
    )
    let itemDescription = ''
    let containerDescription = ''

    if (containers) {
        for (let i = 0; i < containers.length; i++) {
            let itemsInContainer = props.items.filter(
                item => item.loc === containers[i].name
            )

            if (itemsInContainer.length === 0) {
                containerDescription +=
                    'The ' + containers[i].name + ' is empty.'
            } else {
                containerDescription +=
                    'The ' +
                    containers[i].name +
                    ' contains ' +
                    listItems(itemsInContainer) +
                    '.'
            }
        }
    }

    let itemList = listItems(invItemsInCurrentLoc)

    if (itemList.length > 0) itemDescription = 'You see ' + itemList + ' here.'

    let description = [
        props.location.description,
        itemDescription,
        containerDescription,
    ].join(' ')
    props.addLog(description)
}

export default LOOK
