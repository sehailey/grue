const Sequelize = require('sequelize')
const db = require('../db')

const Location = db.define('location', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: Sequelize.STRING,
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Location
