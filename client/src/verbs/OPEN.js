import {listItems} from '../classes'

const OPEN = (props, command) => {
    let item = props.findItem(command.words[0])

    console.log('ITEM', item)
    let result
    if (item.isBarrier) {
        result = props.location.OPEN(item)
        return result
    } else if (item.isContainer) {
        // need to locate item
        result = item.OPEN()
        let contents = props.items.filter(i => i.loc === item.name)
        if (contents.length === 0) result += ' It is empty.'
        else result += ' You see ' + listItems(contents) + ' inside.'
        return result
    }
}

export default OPEN
