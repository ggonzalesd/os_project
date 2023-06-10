const express = require('express');
const boom = require('@hapi/boom');
const assistantModel = require('./../models/assistant.model');
const validatorHandlerGen = require('../middlewares/validation.handler.gen');
const { paginatorSchemaPaginator } = require('../schemas/paginator.schema');
const { assistantSchema, assistantFindOneSchema, assistantEditSchema } = require('./../schemas/assistants.schema');

const router = express.Router();

router.get('/',
  validatorHandlerGen(paginatorSchemaPaginator, 'query'),
  async (req, res, next) => {
    assistantModel.find().then(data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

router.get('/:dni',
  validatorHandlerGen(assistantFindOneSchema, 'params'),
  async (req, res, next) => {
    const { dni } = req.params; 
    assistantModel.findOne({dni}).then( data => {
      if (data)
        res.json(data);
      else
        throw boom.notFound(`Assistant with dni '${dni}' does not exist!`);
    })
    .catch(err => next(err));
  }
)

router.post('/',
  validatorHandlerGen(assistantSchema, 'body'),
  async (req, res, next) => {
    assistantModel.insertMany([req.body]).then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

router.put('/:dni',
  validatorHandlerGen(assistantFindOneSchema, 'params'),
  validatorHandlerGen(assistantEditSchema, 'body'),
  async (req, res, next) => {
    const { dni } = req.params;
    const body = req.body;
    assistantModel.findOne({dni}).then( data => {
      if (!data)
        throw boom.notFound(`Assistant with dni '${dni}' does not exist!`);
      else
      assistantModel.updateOne({dni}, body).then(data => {
          res.json(data);
        }).catch(err => next(err));
    })
    .catch(err => next(err));
  }
)

router.delete('/:dni',
  validatorHandlerGen(assistantFindOneSchema, 'params'),
  async (req, res, next) => {
    const { dni } = req.params;
    assistantModel.deleteOne({dni}).then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

module.exports = router;