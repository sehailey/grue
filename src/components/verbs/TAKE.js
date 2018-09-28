const TAKE = function(props, item) {
    let action = item.TAKE()
    props.addLog(action)
    return item
}

export default TAKE
