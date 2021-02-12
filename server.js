const express = require('express');
const socket = require('socket.io');
const app = express();
app.use(express.static('public'));

const httpPort = 8080;
const server = app.listen(httpPort, () => {
	console.log(`Listening on port ${httpPort}`)
});

const io = socket(server);
io.on('connection', (socket) => {
	console.log(`Connection made, Socket ID ${socket.id}`);

	socket.on('message', (data) => {
		// console.log(`Received message from ${socket.id}: ${JSON.stringify(data)}`);
		io.sockets.emit('message', {
			userName: 'user#' + socket.id.slice(0, 4),	// make username based off sock id
			content: data.content
		})
	});
});