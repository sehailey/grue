import Take from './Take'
import Drop from './Drop'
import Examine from './Examine'
import Light from './Light'

const TAKE = 'TAKE'
const DROP = 'DROP'
const EXAMINE = 'EXAMINE'
const LIGHT = 'LIGHT'

export const DoActionOnItem = (props, verb, item = null) => {
    if (verb === TAKE) Take(props, item)
    if (verb === DROP) Drop(props, item)
    if (verb === EXAMINE) Examine(props, item)
    if (verb === LIGHT) Light(props, item)
}

export {default as Move} from './Move'
export {default as Look} from './Look'

export const verbs = [TAKE, DROP, EXAMINE, LIGHT]
