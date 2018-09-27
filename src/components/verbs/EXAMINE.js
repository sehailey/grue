const Examine = (props, i) => {
    const itemName = i.toLowerCase()
    const item = props.player.inv.find(ele => ele.name === itemName)
    if (item) {
        props.addLog(item.description)
    } else props.addLog('You don\'t have that!')
}

export default Examine
