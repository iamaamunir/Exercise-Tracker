const mongoose = require("mongoose");
const schema = mongoose.Schema;

const exerciseSchema = new schema(
  {
    _id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: { type: Number, required: true },
    date: {
      type: String,
    },
    username: {
      type: String,
    },
  },
  { versionKey: false }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
