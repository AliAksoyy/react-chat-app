const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //!prevent Xss attacks cross-site scripting attacks
    sameSite: "strict", //? CSRF attacks cross-site forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

const decodeToken = (token) => {
  const data = jwt.verify(token, process.env.JWT_SECRET);
  return data;
};

module.exports = { generateTokenAndSetCookie, decodeToken };