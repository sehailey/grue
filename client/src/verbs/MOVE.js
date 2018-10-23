const Move = (props, direction) => {
    console.log('PROPS', props)
    const {location} = props
    console.log('LOCATION', location)

    if (location.isBlocked[direction]) {
        props.addLog(location.isBlocked[direction])
    } else if (!location[direction]) {
        props.addLog('You can\'t go that way.')
    } else props.dispatchMove(direction)
}

export default Move
