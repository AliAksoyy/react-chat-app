const User = require("../models/UserModel");
const { decodeToken } = require("../utils/generateToken");
const authMiddleware = async (req, res, next) => {
  try {
    // let token = req.headers.cookie;
    // token = token.split("=")[1];
    const token =
      req.cookies.token || req.headers["authorization"].split("Bearer ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthhorized - No Token Provided" });
    }

    const { userId } = decodeToken(token);

    const user = await User.findOne({ _id: userId }).select("-password");

    if (!user) {
      res.status(401).json({ message: "User Not Found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in sendMessages controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = authMiddleware;
