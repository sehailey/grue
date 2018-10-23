class Object {
  constructor({name, description, loc, isInvItem, isContainer}) {
    this.name = name
    this.aName = 'a ' + name
    this.pName = name + 's'
    this.loc = loc
    this.description = description
    this.isInvItem = isInvItem
    this.isContainer = isContainer
  }
  describe = () => {
    return this.description
  }

  // OPEN = () => {
  //   return "You can't open that!"
  // }
  //
  // READ = () => {
  //   return "It doesn't say anything very interesting."
  // }
  //
  // TAKE = () => {
  //   if (!this.isInvItem) return "You can't take that!"
  //   else if (this.loc === 'player') return 'You already have that!'
  //   else {
  //     this.loc = 'player'
  //     return 'Taken.'
  //   }
  // }
  //
  // DROP = loc => {
  //   if (!this.loc === 'player') return "You don't have that!"
  //   else {
  //     this.loc = loc
  //     return 'Dropped.'
  //   }
  // }

  EXAMINE = function() {
    return this.describe()
  }
}

export default Object

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
