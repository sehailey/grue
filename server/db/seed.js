const db = require('../db')
const { Item, Location } = require('./models')
//const [invItems, nonInvItems, rooms] = require("./constructors");
const items = require('../../client/src/components/Items/constructors')
const locations = require('../../client/src/components/Location/constructors')
const fs = require('fs')

const runSeed = async () => {
  await db.sync({ force: true })
  console.log('db synced!')
  console.log('seeding...')
  try {
    await Promise.all([Item.bulkCreate(items), Location.bulkCreate(locations)])
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
