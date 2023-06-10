const joi = require('joi')

const dni = joi.number().integer().positive()
const fullname = joi.string().min(4)
const username = joi.string().min(4)
const password = joi.string().min(6)
const salary = joi.number().positive()

const assistantSchema = joi.object({
  dni: dni.required(),
  fullname: fullname.required(),
  username: username.required(),
  password: password.required(),
  salary: salary.required()
})

const assistantEditSchema = joi.object({
  fullname: fullname.optional(),
  username: username.optional(),
  password: password.optional(),
  salary: salary.required(),
}).required().min(1);

const assistantFindOneSchema = joi.object({
  dni: dni.required()
})

module.exports = {
  assistantEditSchema,
  assistantSchema,
  assistantFindOneSchema
}