const db = require('../db')
const { Item, Room } = require('./models')
//const [invItems, nonInvItems, rooms] = require("./constructors");
const items = require('../../client/src/items/constructors')
const rooms = require('../../client/src/rooms/constructors')
const fs = require('fs')

const runSeed = async () => {
  await db.sync({ force: true })
  console.log('db synced!')
  console.log('seeding...')
  try {
    await Promise.all([Item.bulkCreate(items), Room.bulkCreate(rooms)])
    console.log('seeded successfully')
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

runSeed()
