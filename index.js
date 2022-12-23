const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const exerciseRoute = require("./routes/exerciseRoute");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/", userRoute);
app.use("/", exerciseRoute);
const { dbConnection } = require("./db/dbConnection");
dbConnection();

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
