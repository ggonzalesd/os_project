const mongoose = require('mongoose');

const sedesSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  aforo: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Sedes', sedesSchema);