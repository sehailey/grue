const Sequelize = require("sequelize")
const db = require("../db")

const Room = db.define("room", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  }
})

module.exports = Room
