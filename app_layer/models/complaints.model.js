const mongoose = require('mongoose');

//user_dni: number
//created_at: date
//sede_code: string
//assistant_dni: number
//clothes_uuid: string
//message: string

const complaintsSchema = mongoose.Schema({
  user_dni: {
    type: Number,
    required: true,
  },
  sede_code: {
    type: String,
    default: null,
  },
  assistant_dni: {
    type: Number,
    default: null,
  },
  clothes_uuid: {
    type: String,
    default: null,
  },
  message: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Complaints', complaintsSchema)