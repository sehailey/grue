const state = {
  score: 0,
  player: {isAlive: true},
  inv: [{name: 'torch'}],
  location: {name: 'westOfHouse'},
}

const command = {
  verb: null,
  item1: null,
  prep: null,
  item2: null,
  words: [],
}

/*  so attach the split words to the command object and pass *it* the parser,
    which will fill the slots and pass the command to a verb. This means, tho, that
    the parser needs to not only take into account the input string but also what's in
    the command object. This is a good reason to leave the parsing to be done as an
    array, so that it can just be passed in and appended, rather than */

/* Another struggle: where to 'locate' the object ? I did have a thought
        that if might make more sense to only keep on state

        Parse command: split, fill slots, and flag with, e.g., unknown
        Interpret: actually call the functions that result from the parse, e.g.,
        if isUnknown this.isUnknown()

        */

/* Another concern: need a standardized input-out strategy. I think I was
    roughly drifting toward having the output of every verb be a string plus
    a call to update items, because once the object has its methods called on it
    it it is changed, and passing it through the store will update everything.
    but this will of course change with the database.

    What has to happen is that the objects have to be built on the front end but
    with data from the backend. But how? I'll get an array of objects (with names)
    from the database, but each item will have its own page.

    What if I tried to 
    */

/* which is another issue......
  It's out of the questoin to store every property of every object in a databae.
  but how to go about deciding which ones??? I'm very stuck here. And I'm trying
  to put this off for later....
*/
