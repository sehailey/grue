const Drop = (props, item) => {
    let action = item.DROP(props.location.name)
    props.addLog(action)
    return item
}

export default Drop
