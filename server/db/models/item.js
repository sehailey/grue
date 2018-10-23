const Sequelize = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  loc: { type: Sequelize.STRING },
  isContainer: { type: Sequelize.BOOLEAN, defaultValue: false },
  isOpen: { type: Sequelize.BOOLEAN, defaultValue: false },
  isInvItem: { type: Sequelize.BOOLEAN, defaultValue: false }
});

Item.prototype.describe = () => this.description;

module.exports = Item;

// class OBJECT {
//   constructor(name) {
//     this.name = name;
//     this.aName = 'a ' + name;
//     this.pName = name + 's';
//     this.loc = null;
//     this.description = 'It\'s just an ordinary ' + this.name + '.';
//     this.isInvItem = false;
//     this.isContainer = false;
//     this.contains = [];
//
//     this.describe = () => {
//       return this.description;
//     };
//
//     this.OPEN = () => {
//       return 'You can\'t open that!';
//     };
//
//     this.READ = () => {
//       return 'It doesn\'t say anything very interesting.';
//     };
//
//     this.TAKE = () => {
//       if (!this.isInvItem) return 'You can\'t take that!';
//       else if (this.loc === 'player') return 'You already have that!';
//       else {
//         this.loc = 'player';
//         return 'Taken.';
//       }
//     };
//
//     this.DROP = loc => {
//       if (!this.loc === 'player') return 'You don\'t have that!';
//       else {
//         this.loc = loc;
//         return 'Dropped.';
//       }
//     };
//
//     this.EXAMINE = function() {
//       return this.describe();
//     };
//     this.EXAMINE = this.EXAMINE.bind(this);
//   }
//   EXAMINE() {
//     return this.description;
//   }
// }
//
// export default OBJECT;
