const TAKE = (props, i) => {
    const itemName = i.toLowerCase()
    const item = props.location.contains.find(ele => ele.name === itemName)

    if (item) {
        props.take(item)
        props.addLog('You took the ' + itemName + '.')
    } else if (props.player.inv.includes(item)) {
        props.addLog('You already have that!')
    } else props.addLog('You don\'t see a ' + itemName + ' here.')
}

export default TAKE
