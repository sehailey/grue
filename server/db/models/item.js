const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
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
  isInvItem: { type: Sequelize.BOOLEAN, defaultValue: false },
  isLit: { type: Sequelize.BOOLEAN, defaultValue: false }
})

Item.prototype.describe = () => this.description

module.exports = Item
