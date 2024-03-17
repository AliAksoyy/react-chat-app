const express = require("express");
const getUsersForSideBar = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");

const userRouter = express.Router();

userRouter.get("/", authMiddleware,getUsersForSideBar);

module.exports = userRouter;
