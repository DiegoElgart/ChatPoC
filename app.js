const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = 3000;

const socketIO = require("socket.io");
const io = socketIO(server);
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
	socket.on("chat message", msg => {
		io.emit("chat message", msg);
	});
});
server.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`));
