var EventEmitter = require('events');
var util = require('util');

function SayHello() {
	this.greeting = 'Hello world!';
}

util.inherits(SayHello, EventEmitter);

SayHello.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}


var Hello = new SayHello();

Hello.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});


Hello.greet("Nour Elmokhtar");