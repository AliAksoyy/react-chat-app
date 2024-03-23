const Conversation = require("../models/Conversation");
const Message = require("../models/MessageModel");
const { getReceiverSocketId, io } = require("../socket/socket");

const sendMessage = async (req, res) => {
  try {
    const { userId: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    const receiverSocketId = getReceiverSocketId(receiverId);
    console.log("receiverSocketId", receiverSocketId);
    if (receiverSocketId) {
      //? io.to() <socketId> emit() used to send events to spesific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    //this will run in paralel
    await Promise.all([newMessage.save(), conversation.save()]);

    //*SocketIo Functionalty

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessages controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }

  return;
};

const getMessages = async (req, res) => {
  try {
    const { userId: receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages"); //* not reference but actuak messges

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation?.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in sendMessages controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { sendMessage, getMessages };
