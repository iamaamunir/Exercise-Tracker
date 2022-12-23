const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.route("/api/users").post(userController.createUser);
userRouter.route("/api/users").get(userController.getUsers);

module.exports = userRouter;
