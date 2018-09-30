const TAKE = function(props, item1, prep, item2) {
    let action = item1.TAKE()
    props.addLog(action)

    return item1
}

export default TAKE
