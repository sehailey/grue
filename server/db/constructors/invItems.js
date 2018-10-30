const isInvItem = true;

/*
const item = {
name: '',
description: '',
isInvItem
}
 */

module.exports = [
  {
    name: "leaflet",
    description:
      "WELCOME TO ZORK!\n\nZORK is a game of adventure, danger, and low cunning. In it you will explore some of the most amazing territory ever seen by mortals. No computer should be without one!",
    loc: "mailbox",
    isInvItem
  },
  {
    name: "egg",
    description: "The jewel-encrusted egg is closed.",
    loc: "upTree",
    isInvItem,
    isContainer: true,
    isOpen: false
  }
];
