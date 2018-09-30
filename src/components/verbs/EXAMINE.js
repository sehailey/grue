import {listItems} from '../classes'

const Examine = function(props, item, prep) {
    let description = item.description
    let contentsDescription = ''
    //if it's an open container, list it's contents
    if (item.isOpen) {
        let contents = props.items.filter(i => i.loc === item.name)
        if (contents.length === 0)
            contentsDescription += 'The ' + item.name + ' is empty.'
        else
            contentsDescription +=
                'The ' + item.name + ' contains ' + listItems(contents) + '.'
    }

    if (prep === 'INSIDE') props.addLog(contentsDescription)
    else props.addLog([description, contentsDescription].join(' '))
}

export default Examine
