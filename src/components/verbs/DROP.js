const Drop = (props, item) => {
    let action
    if (item.loc !== 'player') action = 'You don\'t have that!'
    else action = item.DROP(props.location.name)
    props.addLog(action)
    return item
}

export default Drop
