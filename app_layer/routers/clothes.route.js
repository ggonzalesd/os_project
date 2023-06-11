const express = require('express');
const boom = require('@hapi/boom');
const clothesModel = require('./../models/clothes.model');
const validatorHandlerGen = require('../middlewares/validation.handler.gen');
const { paginatorSchemaPaginator } = require('../schemas/paginator.schema');
const { clothesEditSchema, clothesFindOneSchema, clothesSchema } = require('./../schemas/clothes.schema');

const router = express.Router();

router.get('/',
  validatorHandlerGen(paginatorSchemaPaginator, 'query'),
  async (req, res, next) => {
    clothesModel.find().then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

router.get('/:uuid',
  validatorHandlerGen(clothesFindOneSchema, 'params'),
  async(req, res, next) => {
    const { uuid } = req.params; 
    clothesModel.findOne({uuid}).then( data => {
      if (data)
        res.json(data);
      else
        throw boom.notFound(`Clothe with uuid '${uuid}' does not exist!`);
    })
    .catch(err => next(err));
  }
)

router.post('/',
  validatorHandlerGen(clothesSchema, 'body'),
  async (req, res, next) => {
    clothesModel.insertMany([req.body]).then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

router.put('/:uuid',
  validatorHandlerGen(clothesFindOneSchema, 'params'),
  validatorHandlerGen(clothesEditSchema, 'body'),
  async (req, res, next) => {
    const { uuid } = req.params;
    const body = req.body;
    clothesModel.findOne({uuid}).then( data => {
      if (!data)
        throw boom.notFound(`Clothe with uuid '${uuid}' does not exist!`);
      else
      clothesModel.updateOne({uuid}, body).then(data => {
          res.json(data);
        }).catch(err => next(err));
    })
    .catch(err => next(err));
  }
)

router.delete('/:uuid',
  validatorHandlerGen(clothesFindOneSchema, 'params'),
  async (req, res, next) => {
    const { uuid } = req.params;
    clothesModel.deleteOne({uuid}).then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

module.exports = router