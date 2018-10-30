import parse from '../../functions/parse'

const PARSE_COMMAND = 'PARSE_COMMAND'
const CLEAR_COMMAND = 'CLEAR_COMMAND'

export const parseCommand = command => ({type: PARSE_COMMAND, command})
export const clearCommand = () => ({type: CLEAR_COMMAND})

const defaultCommand = {
  isInvalid: false,
  isUnknown: false,
  isDirection: false,
  unknown: null,
  direction: null,
  verb: null,
  item1: null,
  prep: null,
  item2: null,
  words: [],
}

/** REDUCER **/
export default function(command = defaultCommand, action) {
  switch (action.type) {
    case PARSE_COMMAND: {
      return parse(action.command)
    }
    case CLEAR_COMMAND: {
      return defaultCommand
    }

    default: {
      return command
    }
  }
}
