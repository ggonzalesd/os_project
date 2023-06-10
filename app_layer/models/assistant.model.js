const mongoose = require('mongoose');

const assistantSchema = mongoose.Schema(
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
    salary: {
      type: Number,
      require: true
    }
  }
);

module.exports = mongoose.model('Assistant', assistantSchema);