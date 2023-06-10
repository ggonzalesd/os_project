const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    dni: {
      type: Number,
      required: true
    },
    fullname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    joined_at: {
      type: Date,
      default: Date.now
    }
  }
);

module.exports = mongoose.model('User', userSchema);