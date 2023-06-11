const joi = require('joi');

const code = joi.string().min(4)
const address = joi.string().min(4)
const aforo = joi.number().integer().positive()

const sedesSchema = joi.object({
  code: code.required(),
  address: address.required(),
  aforo: aforo.required(),
})

const sedesEditSchema = joi.object({
  address: address.optional(),
  aforo: aforo.optional()
}).required().min(1)

const sedesFindOneSchema = joi.object({
  code: code.required()
})

module.exports = {
  sedesSchema,
  sedesEditSchema,
  sedesFindOneSchema
}