const mongoose = require('mongoose');

// dni: 58353180,
// created_at: ISODate("2023-03-22T00:00:00.000Z"),
// comment:

const commentSchema = mongoose.Schema({
  dni: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Comments', commentSchema);