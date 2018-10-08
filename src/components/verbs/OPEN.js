import {listItems} from '../classes'

const OPEN = (props, item) => {
    let description = item.OPEN()
    let contents = props.items.filter(i => i.loc === item.name)
    if (contents.length === 0) description += ' It is empty.'
    else description += ' You see ' + listItems(contents) + ' inside.'
    props.addLog(description)
}

export default OPEN
