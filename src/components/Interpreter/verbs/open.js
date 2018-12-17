import store, { addLog } from '../../../store'
const open = item => {
  const result = item.open()
  return store.dispatch(addLog(result.log))
}

export default open
