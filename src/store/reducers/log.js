const ADD_LOG = 'LOG'
const LOG_UNKNOWN = 'LOG_UNKNOWN'
const LOG_INVALID = 'LOG_INVALID'

export const addLog = text => ({
  type: ADD_LOG,
  text
})

export const logUnknown = word => ({
  type: LOG_UNKNOWN,
  word
})

export const logInvalid = () => ({
  type: LOG_INVALID
})

const defaultLogs = ['It is pitch black...']

export default function (logs = defaultLogs, action) {
  switch (action.type) {
  case ADD_LOG: {
    return [...logs, action.text]
  }
  case LOG_UNKNOWN: {
    return [...logs, `I don't know the word ${action.word}.`]
  }

  case LOG_INVALID: {
    return [...logs, 'I\'m not sure what you\'re trying to say.']
  }
  default: {
    return logs
  }
  }
}
