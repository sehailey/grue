const ADD_LOG = 'LOG'

export const addLog = text => ({
  type: ADD_LOG,
  text
})

const defaultLogs = ['It is pitch black...']

export default function (logs = defaultLogs, action) {
  switch (action.type) {
  case ADD_LOG: {
    return [...logs, action.text]
  }
  default: {
    return logs
  }
  }
}
