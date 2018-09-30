const KICK = (props, item1) => {
    let log
    if (item1.KICK) log = item1.KICK()
    else log = 'Kicking the ' + item1.name + ' doesn\'t really do anyting.'
    props.addLog(log)
}

export default KICK
