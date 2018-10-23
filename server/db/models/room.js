const Sequelize = require("sequelize");
const db = require("../db");

const Room = db.define("room", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: Sequelize.STRING,
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Room;
