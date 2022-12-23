const mongoose = require("mongoose");
require("dotenv").config();

function dbConnection() {
  mongoose.connect(process.env.MONGODB_URL);
  mongoose.set("strictQuery", false);
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Error connecting to Database");
  });
}

module.exports = { dbConnection };
