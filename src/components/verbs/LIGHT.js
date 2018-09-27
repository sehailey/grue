const Light = (props, i) => {
    const itemName = i.toLowerCase()
    const item = props.player.inv.find(ele => ele.name === itemName)
    if (!item) props.addLog('You don\'t have that!')
    else if (!item.hasOwnProperty('lit')) props.addLog('You can\'t light that.')
    else if (item.lit) props.addLog('It\'s already lit.')
    else props.addLog('You lit the torch.') //TODO add Light to dispatch
}

export default Light
