const joi = require('joi');

const uuid = joi.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/).message("Must be a UUID");
const name = joi.string().min(4);
const company = joi.string().min(4);
const type = joi.string().min(4);
const price = joi.number().positive();

const clothesSchema = joi.object({
  uuid: uuid.required(),
  name: name.required(),
  company: company.required(),
  type: type.required(),
  price: price.required()
});

const clothesFindOneSchema = joi.object({
  uuid: uuid.required()
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