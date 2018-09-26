const Look = props => {
    const location = props.location
    const items = location.contains.map(item => item.name)
    console.log(items)
    let itemsD = ''
    if (items.length) itemsD = 'You see some items: ' + items.join(', ')
    props.addLog(location.description, itemsD)
}

export default Look
