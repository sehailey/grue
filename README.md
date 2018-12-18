/*********************************************************


*********************************************************/

# About

grue is an Object-Oriented clone of the classic Infocom game Zork. The motivation behind this project was to build a prototype for a scalable text-based role-playing game where items, locations, and storylines can be easily added and customized.

# How to play

Like Zork, grue accepts text commands, such as 'open mailbox' or 'take leaflet'. Check your inventory by typing 'inventory' (or just 'i'), and look around by typing 'look' (or just 'l'). Move by typing directions such as 'north' (or simply 'n'). move north, south, east, west, up, and down by typing the first letter, and move northeast, northwest, southeast, southwest by typing the first letters of each word (e.g., 'ne').

# Dictionary

Some words, such as prepositions, are hard-coded into the dictionary, while item and room names are automatically extracted by importing the items and rooms folders as a module and adding the name of each item and room to the dictionary. The game will tell you if you enter an unknown word.

# Game Mechanics
grue uses React and redux to manage game state.

In Zork, some commands (e.g. "look") do not require an object, others require one object (e.g., "take leaflet") and others require two objects as well as a valid preposition (e.g., "put bottle on table"). In addition, Zork allows users to enter partial commands and will prompt the user for additional information (e.g., typing 'take' will return 'what do you want to take?', and typing 'throw leaflet' will return 'what do you want to throw the leaflet at?')

To emulate this, commands in grue are first run through a 'parser' that splits each command into words. At this stage the command will be returned as invalid if the first word is not a verb. Next, the parser checks if the verb is a direction Otherwise The parser returns an object with 'slots' for a verb, two items, and a preposition. This is then set on state and passed to a function with the same name as the verb, along with the game state. If the command has the correct parameters and executes correctly, the verb calls the method with it's name on the object, passing in the game's state. If the verb requires more arguments, it leaves the current command on state to await that argument before passing it through the parser again and then through the verb again. If any changes are made to any of the items or rooms, an action is dispatched to the store that updates that item or room. Once the command executes completely, the command stored on state is cleared.  

# TODO
- add save functionality
- break verbs up into classes of verbs that accept one, two, or four arguments.
