// export default props => {
//   let complete = true
//   const { addLog, clearCommand, player, isVisible, items } = props
//   const { item1, item2, prep } = props.command
//
//   const target = items.find(item => item.name === item1)
//   if (!target) {
//     addLog('What do you want to take?')
//     return false
//   }
//
//   console.log(isVisible(target))
//   // const visibleOpenContainer = items.find(item => {
//   //   return (
//   //     item.name === item1.loc &&
//   //     item.isOpen &&
//   //     item.loc === (player.currentLoc || 'player')
//   //   )
//   // })
//
//   console.log('TAKE VERB CHECKS')
//   console.log('target loc:', target.loc)
//   // console.log('target is visible?', targetIsVisible)
//   // console.log('visible open container?', visibleOpenContainer)
//
//   // if (target.loc === 'player') {
//   //   addLog('You already have that!')
//   // } else if (!targetIsVisible) {
//   //   addLog("You don't see that here!")
//   // } else {
//   //   target.TAKE(props)
//   // }
// }
