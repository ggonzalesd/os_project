const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  uuid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Clothes', clothesSchema, 'clothes');