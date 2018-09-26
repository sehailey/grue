const Drop = (props, i) => {
    const itemName = i.toLowerCase()
    const item = props.player.inv.find(ele => ele.name === itemName)
    if (item) {
        props.drop(item)
        props.addLog('You dropped the ' + itemName + '.')
    } else props.addLog('You don\'t have that!')
}

export default Drop
