const joi = require('joi');

const id = joi.number().integer().positive();
const name = joi.string().min(4);
const company = joi.string().min(4);
const type = joi.string().min(4);
const price = joi.number().positive();

const clothesSchema = joi.object({
  id: id.required(),
  name: name.required(),
  company: company.required(),
  type: type.required(),
  price: price.required()
});

const clothesFindOneSchema = joi.object({
  id: id.required()
})

const clothesEditSchema = joi.object({
  name: name.optional(),
  company: company.optional(),
  type: type.optional(),
  price: price.optional()
}).required().min(1)

module.exports = {
  clothesEditSchema,
  clothesFindOneSchema,
  clothesSchema
}