const TAKE = function(props, i) {
    const itemName = i.toLowerCase()

    let invItem = props.player.inv.find(ele => ele.name === itemName)
    let locItem = props.location.contains.find(ele => ele.name === itemName)

    let invItemContainingItem
    props.player.inv.map(tmpInvItem => {
        if (
            tmpInvItem.isOpen &&
            tmpInvItem.contains.find(ele => ele.name === itemName)
        )
            invItemContainingItem = tmpInvItem
    })

    let locItemContainingItem
    props.location.contains.map(tmpLocItem => {
        if (
            tmpLocItem.isOpen &&
            tmpLocItem.contains.find(ele => ele.name === itemName)
        )
            locItemContainingItem = tmpLocItem
    })

    if (
        !invItem &&
        !locItem &&
        !invItemContainingItem &&
        !locItemContainingItem
    )
        props.addLog('You don\'t see a ' + itemName + ' here.')
    else if (invItem) props.addLog('You already have that!')
    else if (locItem) {
        props.addLog(locItem.TAKE())
        props.take(locItem)
    } else if (invItemContainingItem) {
        const item = invItemContainingItem.contains.find(
            ele => ele.name === itemName
        )

        props.addLog(item.TAKE())
        if (item.canTake) {
            props.addItemToInv(item)
            props.changeItemInInv(props.player)
        }
    } else if (locItemContainingItem) {
        const item = locItemContainingItem.contains.find(
            ele => ele.name === itemName
        )
        props.addLog(item.TAKE())
        if (item.canTake) {
            props.addItemToInv(item)
            props.changeItemInLoc(props.location)
        }
    }
}

export default TAKE
