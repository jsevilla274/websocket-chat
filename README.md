# Websocket Chat
An application that delivers a static page using Express and also uses WebSockets (socket.io) to create a multiclient chat.

## Running the app
First, install the application
```
$ git clone https://github.com/jsevilla274/websocket-chat.git
$ cd websocket-chat
$ npm install
```
Then, start the server
```
$ node server.js
```
Finally, open `http://localhost:8080/` on a browser, type a message in the text box, and press the "send" button. Open the page on multiple windows to experience multiclient chat.