const joi = require('joi');

//user_dni: number
//created_at: date
//sede_code: string
//assistant_dni: number
//clothes_uuid: string
//message: string

const _id = joi.string().regex(/^[0-9a-fA-F]{24}$/).message("Must be a hex number of 24 digits!")
const dni = joi.number().integer().positive();
const sede_code = joi.string().min(6).allow(null);
const clothes_uuid = joi.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/).message("Must be a UUID").allow(null);
const message = joi.string().min(4);

const complaintsSchema = joi.object({
  user_dni: dni.required(),
  sede_code: sede_code,
  assistant_dni: dni.allow(null),
  clothes_uuid: clothes_uuid,
  message: message.required(),
})

const complaintsEditSchema = joi.object({
  sede_code: sede_code.optional(),
  assistant_dni: dni.allow(null).optional(),
  clothes_uuid: clothes_uuid.optional(),
  message: message.optional(),
}).required().min(1)

const complaintsFindOneSchema = joi.object({
  _id: _id.required(),
})

module.exports = {
  complaintsSchema,
  complaintsEditSchema,
  complaintsFindOneSchema,
}