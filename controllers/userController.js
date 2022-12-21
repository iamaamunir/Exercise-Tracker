const userModel = require("../models/userModel");

async function createUser(req, res, next) {
  try {
    const username = req.body.username;
    const user = await userModel.create({ username });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = { createUser };
