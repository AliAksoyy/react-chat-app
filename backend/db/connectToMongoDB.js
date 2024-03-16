const mongoose = require("mongoose");

const createConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connection established");
  } catch (error) {
    console.log("Error connection mongodb", error.message);
  }
};

module.exports = createConnect
