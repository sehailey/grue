const isInvItem = true;

/*
const item = {
name: '',
description: '',
isInvItem
}
 */

const letter = {
  name: "letter",
  description: "it's a letter addressed to John Zerzan",
  loc: "mailbox",
  isInvItem
};

const torch = {
  name: "torch",
  description: "it's a torch. it is currently unlit.",
  loc: "westOfHouse",
  isInvItem
};

const bandana = {
  name: "bandana",
  description: "You could probably hide your identity pretty well with this.",
  loc: "southOfHouse",
  isInvItem
};

module.exports = [letter, torch, bandana];
