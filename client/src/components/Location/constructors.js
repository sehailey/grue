// These are used for seeding the database.
//onst { mailbox, leaflet, sack, bottle } = require('../Items/constructors')
module.exports = [
  {
    name: 'livingRoom',
    title: 'Living Room',
    description: `You are in the living room. There is a doorway to the east, a wooden door with strange gothic lettering to the west, which appears to be nailed shut, a trophy case, and a large oriental rug in the center of the room.
Above the trophy case hangs an elvish sword of great antiquity.
A battery-powered brass lantern is on the trophy case.`
  },
  {
    name: 'westOfHouse',
    title: 'West of House',
    description:
      'This is an open field west of a white house, with a boarded front door. There is a small mailbox here.',
    items: []
  },

  {
    name: 'attic',
    title: 'Attic',
    description: `You have moved into a dark place.
      It is pitch black. You are likely to be eaten by a grue.`,
    items: []
  },

  {
    name: 'northOfHouse',
    title: 'North of House',
    description:
      'You are facing the north side of a white house. There is no door here, and all the windows are boarded up. To the north a narrow path winds through the trees.',
    items: []
  },

  {
    name: 'southOfHouse',
    title: 'South of House',
    description:
      'You are facing the south side of a white house. There is no door here, and all the windows are boarded.',
    items: []
  },

  {
    name: 'behindHouse',
    title: 'Behind House',
    description:
      'You are behind the white house. A path leads into the forest to the east. In one corner of the house there is a small window which is slightly ajar.',
    items: []
  },

  {
    name: 'kitchen',
    title: 'Kictchen',
    description:
      'You are in the kitchen of the white house. A table seems to have been used recently for the preparation of food. A passage leads to the west and a dark staircase can be seen leading upward. A dark chimney leads down and to the east is a small window which is open.\nOn the table is an elongated brown sack, smelling of hot peppers.\nA bottle is sitting on the table.\nThe glass bottle contains:\nA quantity of water',
    items: []
  },

  {
    name: 'forestPath',
    title: 'Forest Path',
    description:
      'This is a path winding through a dimly lit forest. The path heads north-south here. One particularly large tree with some low branches stands at the edge of the path.',
    items: []
  },

  {
    name: 'upTree',
    title: 'Up a Tree',
    description:
      'You are about 10 feet above the ground nestled among some large branches. The nearest branch above you is above your reach.\nIn the bird\'s nest is a large egg encrusted with precious jewels, apparently scavenged by a childless songbird. The egg is covered with fine gold inlay, and ornamented in lapis lazuli and mother-of-pearl. Unlike most eggs, this one is hinged and closed with a delicate looking clasp. The egg appears extremely fragile.',
    items: []
  },

  {
    name: 'clearing',
    title: 'Clearing',
    description:
      'You are in a clearing, with a forest surrounding you on all sides. A path leads south.\nOn the ground is a pile of leaves',
    items: []
  },
  {
    name: 'forest1',
    title: 'Forest',
    description:
      'This is a forest, with trees in all directions. To the east, there appears to be sunlight. You hear in the distance the chirping of a song bird.',
    items: []
  },
  {
    name: 'forest2',
    title: 'Forest',
    description: 'This is a dimly lit forest, with large trees all around.',
    items: []
  },
  {
    name: 'forest3',
    title: 'Forest',
    description: 'This is a forest, with trees in all directions.',
    items: []
  },
  {
    name: 'forest4',
    title: 'Forest',
    description: 'The forest thins out, revealing impassable mountains.',
    items: []
  }
]
