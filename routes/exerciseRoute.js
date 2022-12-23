const express = require("express");
const exerciseRouter = express.Router();

const exerciseController = require("../controllers/exerciseController");

exerciseRouter
  .route("/api/users/:_id/exercises")
  .post(exerciseController.createExercise);

module.exports = exerciseRouter;
