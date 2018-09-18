const Sequelize = require("sequelize")
const db = require("../db")

const Item = db.define("item", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  }
})

module.exports = Item
