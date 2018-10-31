const Player = require('./player')
const Room = require('./room')
const Item = require('./item')

Player.hasMany(Item)
Item.belongsTo(Player)

Room.hasMany(Item)
Item.belongsTo(Room)

module.exports = { Player, Room, Item }
