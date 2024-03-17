const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    participants: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    messages: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Message",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", ConversationSchema);

module.exports = Conversation;
