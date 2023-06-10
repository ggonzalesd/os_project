const express = require('express');
const boom = require('@hapi/boom');
const userModel = require('./../models/user.model');
const validatorHandlerGen = require('../middlewares/validation.handler.gen');
const { paginatorSchemaPaginator } = require('../schemas/paginator.schema');
const { userSchema, userFindOneSchema, userEditSchema } = require('./../schemas/user.schema');

const router = express.Router();

router.get('/',
  validatorHandlerGen(paginatorSchemaPaginator, 'query'),
  async (req, res, next) => {
    userModel.find().then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

router.get('/:dni',
  validatorHandlerGen(userFindOneSchema, 'params'),
  async(req, res, next) => {
    const { dni } = req.params; 
    userModel.findOne({dni}).then( data => {
      if (data)
        res.json(data);
      else
        throw boom.notFound(`User with dni '${dni}' does not exist!`);
    })
    .catch(err => next(err));
  }
)

router.post('/',
  validatorHandlerGen(userSchema, 'body'),
  async (req, res, next) => {
    userModel.insertMany([req.body]).then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

router.put('/:dni',
  validatorHandlerGen(userFindOneSchema, 'params'),
  validatorHandlerGen(userEditSchema, 'body'),
  async (req, res, next) => {
    const { dni } = req.params;
    const body = req.body;
    userModel.findOne({dni}).then( data => {
      if (!data)
        throw boom.notFound(`User with dni '${dni}' does not exist!`);
      else
        userModel.updateOne({dni}, body).then(data => {
          res.json(data);
        }).catch(err => next(err));
    })
    .catch(err => next(err));
  }
)

router.delete('/:dni',
  validatorHandlerGen(userFindOneSchema, 'params'),
  async (req, res, next) => {
    userModel.deleteOne({dni:req.params.dni}).then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

module.exports = router