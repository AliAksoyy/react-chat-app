const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { generateTokenAndSetCookie } = require("../utils/generateToken");
const { response } = require("express");

const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords dont match" });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already in exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = ` https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = ` https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      const token = generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res
        .cookie("token", token, {
          maxAge: 15 * 24 * 60 * 60 * 1000,
          // httpOnly: true, //!prevent Xss attacks cross-site scripting attacks
          // sameSite: "strict", //? CSRF attacks cross-site forgery attacks
          // secure: process.env.NODE_ENV !== "development",
        })
        .status(201)
        .json({
          _id: newUser._id,
          fullName: newUser.fullName,
          username: newUser.username,
          profilePic: newUser.profilePic,
          token,
        });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password.toString(),
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = generateTokenAndSetCookie(user._id, res);

    res
      .cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        // httpOnly: true, //!prevent Xss attacks cross-site scripting attacks
        // sameSite: "strict", //? CSRF attacks cross-site forgery attacks
        // secure: process.env.NODE_ENV !== "development",
      })
      .status(200)
      .json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
        token,
      });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "")
      .json({ message: "Logout Successfully" });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

const profile = async (req, res) => {
  try {
    const { _id } = req.user;

    const user = await User.findOne({ _id });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login, logout, signup, profile };
