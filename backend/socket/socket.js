const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Connection established socketId" + socket.id);

  socket.on("disconnect", () => {
    console.log("Connection closed socketId" + socket.id);
    socket.close();
  });
});

module.exports = { app, server, io };
