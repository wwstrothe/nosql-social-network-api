// Thought Model
const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent Thought _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: 'Please enter a reaction',
      trim: true,
      minlength: [1, 'Too few characters, please write some more'],
      maxlength: [200, "Please don't make people read an essay..."]
    },
    username: {
      type: String,
      required: 'Please enter your username'
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
  },
  {
    toJson: {
      getters: true
    }
  }
)

const ThoughtSchema = new Schema(
  {
  thoughtText: {
    type: String,
    required: "Please enter a thought",
    time: true,
    minlength: [1, "Too few characters, please write some more"],
    maxlength: [200, "Please don't make people read an essay..."],
  },
  username: {
    type: String,
    required: "Please enter your username",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  reactions: [ReactionSchema]
},
{
  toSJON: {
    virtuals: true,
    getters: true,
  },
  id: false,
}
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length
})

// Create the Thought Model using the above schema
const Thought = model('Thought', ThoughtSchema);

// Export the model
module.exports = Thought