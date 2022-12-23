const exerciseModel = require("../models/exerciseModel.js");
const userModel = require("../models/userModel.js");

async function createExercise(req, res) {
  let { description, date, duration } = req.body;
  const _id = req.body[":_id"];

  const userDetails = await userModel.findById(_id);
  const username = userDetails.username;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (!date) {
    date = new Date();
  } else {
    date = new Date(date);
  }

  const exerciseDetails = await exerciseModel.create({
    username,
    description,
    duration,
    date: date.toLocaleDateString("en-us", options),
    _id,
  });
  res.status(200).json(exerciseDetails);
}

module.exports = { createExercise };
