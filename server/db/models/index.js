const Player = require('./player')
const Location = require('./location')
const Item = require('./item')

Player.hasMany(Item)
Item.belongsTo(Player)

Location.hasMany(Item)
Item.belongsTo(Location)

module.exports = { Player, Location, Item }
