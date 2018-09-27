const Move = (props, direction) => {
    const {location} = props

    if (location[direction]) {
        props.dispatchMove(direction)
    } else props.addLog('You can\'t go that way.')
}

export default Move
