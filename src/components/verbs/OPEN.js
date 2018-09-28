const OPEN = (props, item) => {
    const action = item.OPEN()
    props.addLog(action)
    props.changeItem(item)
    // const playerItem = props.player.inv.find(
    //     ele => ele.name === itemName.toLowerCase()
    // )
    // const locationItem = props.location[itemName]
    //
    // if (playerItem) {
    //     if (!playerItem.canOpen) props.addLog('You can\'t open that!')
    //     else {
    //         playerItem.OPEN()
    //         props.changeItemInInv(playerItem)
    //         props.addLog('You opened the ' + playerItem.name)
    //     }
    // } else if (locationItem) {
    //     if (!locationItem.canOpen) props.addLog('You can\'t open that!')
    //     else {
    //         locationItem.OPEN()
    //         props.changeItemInLoc(locationItem)
    //         props.addLog('You opened the ' + locationItem.name)
    //     }
    // } else console.log('OPEN FAILURE')
}

export default OPEN
