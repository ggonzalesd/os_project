const joi = require('joi');

const _id = joi.string().regex(/^[0-9a-fA-F]{24}$/).message("Must be a hex number of 24 digits!")
const dni = joi.number().integer().positive()
const comment = joi.string().min(3)

const commentSchema = joi.object({
  dni: dni.required(),
  comment: comment.required(),
})

const commentEditSchema = joi.object({
  comment: comment.required()
})

const commentFindOneSchema = joi.object({
  _id: _id.required()
})

module.exports = {
  commentSchema,
  commentEditSchema,
  commentFindOneSchema
}