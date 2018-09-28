const Light = (props, itemName) => {
    const playerItem = props.player.inv.find(
        ele => ele.name === itemName.toLowerCase()
    )
    const locationItem = props.location[itemName]

    console.log('PLAYERITEMNAME', playerItem)
    console.log('LOCATIONITEMNAME', locationItem)

    const item = playerItem

    if (locationItem) props.addLog('You have to pick it up first!')
    else if (!item) props.addLog('You don\'t have that!')
    else if (!item.hasOwnProperty('canLight'))
        props.addLog('You can\'t light that.')
    else if (item.isLit) props.addLog('It\'s already lit.')
    else {
        item.LIGHT()
        props.changeItemInInv(item)
        props.addLog('You lit the ' + item.name)
    }
}

export default Light
