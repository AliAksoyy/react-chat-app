const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  return token;
};

const decodeToken = (token) => {
  const data = jwt.verify(token, process.env.JWT_SECRET);
  return data;
};

module.exports = { generateTokenAndSetCookie, decodeToken };
