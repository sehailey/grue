const db = require("../db")
const { Item, Room } = require("./models")
const [items, rooms] = require("./objects")

console.log(items, rooms)
async function runSeed() {
  await db.sync({ force: true })
  console.log("db synced!")
  console.log("seeding...")
  try {
    await Promise.all([Item.bulkCreate(items), Room.bulkCreate(rooms)])
    console.log(`seeded successfully`)
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log("closing db connection")
    await db.close()
    console.log("db connection closed")
  }
}

runSeed()
