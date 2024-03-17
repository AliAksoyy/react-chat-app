const express = require("express");
const {
  sendMessage,
  getMessages,
} = require("../controllers/messageControllers");
const authMiddleware = require("../middleware/authMiddleware");

const messageRouter = express.Router();

messageRouter.post("/send/:userId", authMiddleware, sendMessage);
messageRouter.get("/:userId", authMiddleware, getMessages);

module.exports = messageRouter;
