class Item {
  constructor ({ id, name, description, loc, isInvItem, isContainer, isLit }) {
    this.id = id
    this.name = name
    this.aName = 'a ' + name
    this.pName = name + 's'
    this.loc = loc
    this.description = description
    this.isInvItem = isInvItem
    this.isContainer = isContainer
    this.isLit = isLit
  }
  describe = () => {
    return this.description
  }

  // OPEN = props => {
  //   if (!this.isContainer) props.addLog(`You must tell me how to do that with a ${this.name}`)
  //   else if (this.isOpen) props.addLog('It\'s already open.')
  //   else {
  //     this.isOpen = true
  //     props.updateItem(this)
  //     props.addLog(`You open the ${this.name}`)
  //   }
  // }
  //
  // READ = () => {
  //   return 'It doesn\'t say anything very interesting.'
  // }
  //
  // TAKE = props => {
  //   if (!this.isInvItem) props.addLog('You can\'t take that!')
  //   else if (this.loc === 'player') props.addLog(`You already have the ${this.name}`)
  //   else {
  //     this.loc = 'player'
  //     props.addLog('Taken.')
  //     return true
  //   }
  // }
  // //
  // DROP = props => {
  //   if (this.loc === 'player') props.addLog(`You don't have the ${this.name}`)
  //   else {
  //     this.loc = props.player.currentLoc
  //     props.addLog('Dropped.')
  //     return true
  //   }
  // }

  EXAMINE = function () {
    return this.describe()
  }
}

export default Item

// class OBJECT {
//     constructor(name) {
//         this.name = name
//         this.aName = 'a ' + name
//         this.pName = name + 's'
//         this.loc = null
//         this.description = 'It\'s just an ordinary ' + this.name + '.'
//         this.isInvItem = false
//         this.isContainer = false
//         this.contains = []
//
//         this.describe = () => {
//             return this.description
//         }
//
//         this.OPEN = () => {
//             return 'You can\'t open that!'
//         }
//
//         this.READ = () => {
//             return 'It doesn\'t say anything very interesting.'
//         }
//
//         this.TAKE = () => {
//             if (!this.isInvItem) return 'You can\'t take that!'
//             else if (this.loc === 'player') return 'You already have that!'
//             else {
//                 this.loc = 'player'
//                 return 'Taken.'
//             }
//         }
//
//         this.DROP = loc => {
//             if (!this.loc === 'player') return 'You don\'t have that!'
//             else {
//                 this.loc = loc
//                 return 'Dropped.'
//             }
//         }
//
//         this.EXAMINE = function() {
//             return this.describe()
//         }
//         this.EXAMINE = this.EXAMINE.bind(this)
//     }
//     EXAMINE() {
//         return this.description
//     }
// }
//
// export default OBJECT
