const express = require('express');
const boom = require('@hapi/boom');
const complaintsModel = require('./../models/complaints.model');
const usersModel = require('./../models/user.model');
const assistantsModel = require('./../models/assistant.model');
const clothesModel = require('./../models/clothes.model');
const sedesModel = require('./../models/sedes.model');
const validatorHandlerGen = require('../middlewares/validation.handler.gen');
const { paginatorSchemaPaginator } = require('../schemas/paginator.schema');
const { complaintsSchema, complaintsEditSchema, complaintsFindOneSchema } = require('./../schemas/complaints.schema');

const router = express.Router();

const testReq = async (sede_code, assistant_dni, clothes_uuid) => {
  if (sede_code) {
    const sede = await sedesModel.findOne({code: sede_code});
    if(!sede) throw boom.notFound(`Sede with code '${sede_code}' does not exist!`);
  }
  if (assistant_dni) {
    const assistant = await assistantsModel.findOne({dni:assistant_dni});
    if(!assistant) throw boom.notFound(`Assistant with dni '${assistant_dni}' does not exist!`);
  }
  if (clothes_uuid) {
    const clothe = await clothesModel.findOne({uuid:clothes_uuid});
    if(!clothe) throw boom.notFound(`Clothe with uuid '${clothes_uuid}' does not exist!`);
  }
}

router.get('/',
  validatorHandlerGen(paginatorSchemaPaginator, 'query'),
  async (req, res, next) => {
    complaintsModel.find().then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

router.get('/:_id',
  validatorHandlerGen(complaintsFindOneSchema, 'params'),
  async(req, res, next) => {
    const { _id } = req.params; 
    complaintsModel.findOne({_id}).then( data => {
      if (data)
        res.json(data);
      else
        throw boom.notFound(`Complaint with id '${_id}' does not exist!`);
    })
    .catch(err => next(err));
  }
)

//user_dni: number
//sede_code: string
//assistant_dni: number
//clothes_uuid: string
//message: string

router.post('/',
  validatorHandlerGen(complaintsSchema, 'body'),
  async (req, res, next) => {
    const { user_dni, sede_code=null, assistant_dni=null, clothes_uuid=null } = req.body;
    try {
      const user = await usersModel.findOne({dni:user_dni});
      if (!user) throw boom.notFound(`User with dni '${dni}' does not exist!`);
      
      await testReq(sede_code, assistant_dni, clothes_uuid);

      const response = await complaintsModel.insertMany([req.body]);
      res.json(response);
    } catch(err) {
      next(err);
    }
  }
)

router.put('/:_id',
  validatorHandlerGen(complaintsFindOneSchema, 'params'),
  validatorHandlerGen(complaintsEditSchema, 'body'),
  async (req, res, next) => {
    const { _id } = req.params;
    const { sede_code=null, assistant_dni=null, clothes_uuid=null } = req.body;
    try {
      const complaint = await complaintsModel.findOne({_id});
      if (!complaint)
        throw boom.notFound(`Complaint with id '${_id}' does not exist!`);
      await testReq(sede_code, assistant_dni, clothes_uuid);

      const response = await complaintsModel.updateOne({_id}, req.body);
      res.json(response);
    } catch(err) {
      next(err);
    }
  }
)

router.delete('/:_id',
  validatorHandlerGen(complaintsFindOneSchema, 'params'),
  async (req, res, next) => {
    const { _id } = req.params;
    complaintsModel.deleteOne({_id}).then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

module.exports = router