const express = require("express");
const path = require("path");
const authRouter = require("./routes/authRouter");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const bodyParser = require("body-parser");
const createConnect = require("./db/connectToMongoDB");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/auth", authRouter);

// app.get("/", (req, res) => {
//   res.send("Wellcome");
// });

app.listen(PORT, async () => {
  await createConnect();
  console.log("Server listening on port " + PORT);
});
