import {listItems} from '../classes'

const Examine = function(props, item) {
    let description = item.description
    //if it's an open container, list it's contents
    if (item.isOpen) {
        let contents = props.items.filter(i => i.loc === item.name)
        if (contents.length === 0)
            description += 'The ' + item.name + ' is empty.'
        else
            description +=
                'The ' + item.name + ' contains ' + listItems(contents) + '.'
    }

    props.addLog(description)
    return item
}

export default Examine
