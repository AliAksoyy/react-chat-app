const express = require("express");
const { sendMessage } = require("../controllers/messageControllers");

const messageRouter = express.Router();

messageRouter.post("/send/:userId", sendMessage);

module.exports = messageRouter;
