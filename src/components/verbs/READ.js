const READ = (props, item) => {
    let log = 'I\'m not sure what you\'re trying to say.'
    if (item.isInvItem && item.loc !== 'player')
        log = 'You should pick it up first.'
    else if (item.READ) log = item.READ()
    props.addLog(log)
}

export default READ
