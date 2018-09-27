const Look = props => {
    let items = props.location.contains.map(item => item.aName)
    let itemDescription = ''

    if (items.length === 1) itemDescription += 'You see ' + items[0] + ' here.'
    if (items.length === 2)
        itemDescription += 'You see ' + items[0] + ' and ' + items[1] + ' here.'
    if (items.length > 2)
        itemDescription +=
            'You see ' +
            items.slice(0, items.length - 2).join(', ') +
            'and ' +
            items[items.length - 1] +
            ' here.'

    let description = [props.location.description, itemDescription].join(' ')
    props.addLog(description)
}

export default Look
