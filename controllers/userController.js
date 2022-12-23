const userModel = require("../models/userModel");

async function createUser(req, res, next) {
  try {
    const username = req.body.username;
    const user = await userModel.create({ username });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getUsers(req, res) {
  try {
    const allUsers = await userModel.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { createUser, getUsers };
