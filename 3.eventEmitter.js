const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data received user: ${name} with id: ${id} `)
}) // listens to the event

customEmitter.on('response', () => {
    console.log(`some other logic here`)
}) // listens to the event


// can write as many events to listen to then emit them and also order matters
customEmitter.emit('response', 'usman', 41) // the strings need to match and also the .emit emits the event