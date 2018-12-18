import store, { addLog } from '../../../store'
const open = item => {
  if (!item) return store.dispatch(addLog('You don\'t see that here!'))
  const result = item.open()
  return store.dispatch(addLog(result.log))
}

export default open
