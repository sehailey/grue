const TAKE = function(props, item, item2) {
    let container = item2
    console.log(container)
    let action = item.TAKE()

    console.log(item, action)
    props.addLog(action)
    props.updateItems(props.items)

    return item
}

export default TAKE
