var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler: Create
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event: Listen
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event: Fire
eventEmitter.emit('scream');
