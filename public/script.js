if (io) {
	console.log('socket.io loaded successfully.')
} else {
	console.error('socket.io was not loaded!');
}

// only works if websocket is handled by the same webserver
const socket = io.connect(window.location.href);

const sendButton = document.getElementById('send-button');
const chatbox = document.getElementById('chatbox');
let messageInput = document.getElementById('message-input');

const insertMessageInChatbox = (userName, message) => {
	let newMessage = document.createElement('div');
	let userNameElem = document.createElement('b');
	userNameElem.appendChild(document.createTextNode(userName));
	newMessage.appendChild(userNameElem);
	newMessage.appendChild(document.createTextNode(': ' + message))
	chatbox.appendChild(newMessage);
};

sendButton.addEventListener('click', () => {
	const sentMessage = messageInput.value;
	if (!sentMessage) return;

	// send a message to websocket server
	socket.emit('message', { content: sentMessage }, (response) => {
		if (response.status !== 200) {
			console.log(status);
		} else {
			insertMessageInChatbox('Me', sentMessage);
		}
	});
	messageInput.value = "";
});

socket.on('message', (data) => {
	insertMessageInChatbox(data.userName, data.content);
});