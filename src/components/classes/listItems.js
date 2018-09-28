const listItems = container => {
    let items = container.map(item => item.aName)
    let itemList = ''

    if (items.length === 1) itemList += items[0]
    if (items.length === 2) itemList += items[0] + ' and ' + items[1]
    if (items.length > 2)
        itemList +=
            items.slice(0, items.length - 1).join(', ') +
            ', and ' +
            items[items.length - 1]
    return itemList
}

export default listItems
