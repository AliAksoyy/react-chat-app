const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(5000, () => console.log("Server listening on port " + PORT));
