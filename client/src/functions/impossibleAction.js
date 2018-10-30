const rhetorts = ['You can\'t be serious.', 'An intersting idea...', 'A valiant effort.', 'What a concept!']
const randInt = () => Math.floor(Math.random() * Math.floor(rhetorts.length))

export default () => rhetorts[randInt()]
