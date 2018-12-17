import store, { addLog, openWindow } from '../../../store'
const open = item => {
  if (item.name === 'window') console.log(item)
  const result = item.open()
  const { location } = store.getState()
  location.openWindow()
  return store.dispatch(addLog(result.log))
}

export default open
