const joi = require('joi')

const dni = joi.number().integer().positive()
const fullname = joi.string().min(4)
const username = joi.string().min(4)
const password = joi.string().min(6)

const userSchema = joi.object({
  dni: dni.required(),
  fullname: fullname.required(),
  username: username.required(),
  password: password.required()
});

const userEditSchema = joi.object({
  fullname: fullname.optional(),
  username: username.optional(),
  password: password.optional()
}).required().min(1);

const userFindOneSchema = joi.object({
  dni: dni.required()
});

module.exports = {
  userSchema,
  userFindOneSchema,
  userEditSchema
}
