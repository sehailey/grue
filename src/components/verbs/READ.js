const READ = (props, item) => {
    if (!item.loc === 'player') props.addLog('You should pick it up first.')
    else props.addLog(item.READ())
}

export default READ
