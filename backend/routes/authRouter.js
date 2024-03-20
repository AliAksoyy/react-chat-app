const express = require("express");
const {
  signup,
  login,
  logout,
  profile,
} = require("../controllers/authControllers");
const authMiddleware = require("../middleware/authMiddleware");

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/profile", authMiddleware, profile);

module.exports = authRouter;
