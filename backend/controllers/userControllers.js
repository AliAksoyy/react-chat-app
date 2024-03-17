const User = require("../models/UserModel");
const getUsersForSideBar = async (req, res) => {
  try {
    const loggedUserId = req.user._id;

    const users = await User.find({ _id: { $ne: loggedUserId } }).select(
      "-password"
    );
    res.status(201).json(users);
  } catch (error) {
    console.log("Error in sendMessages controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getUsersForSideBar;
