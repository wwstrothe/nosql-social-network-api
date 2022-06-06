// Thought Model
const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ThoughtSchema = new Schema(
  {

  }
)

// Create the Thought Model using the above schema
const Thought = model('Thought', ThoughtSchema);

// Export the model
module.exports = Thought