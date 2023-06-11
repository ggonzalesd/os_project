const express = require('express');
const boom = require('@hapi/boom');
const sedesModel = require('./../models/sedes.model');
const validatorHandlerGen = require('../middlewares/validation.handler.gen');
const { paginatorSchemaPaginator } = require('../schemas/paginator.schema');
const { sedesSchema, sedesEditSchema, sedesFindOneSchema } = require('./../schemas/sedes.schema');

const router = express.Router();

router.get('/',
  validatorHandlerGen(paginatorSchemaPaginator, 'query'),
  async (req, res, next) => {
    sedesModel.find().then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

router.get('/:code',
  validatorHandlerGen(sedesFindOneSchema, 'params'),
  async(req, res, next) => {
    const { code } = req.params; 
    sedesModel.findOne({code}).then( data => {
      if (data)
        res.json(data);
      else
        throw boom.notFound(`Sede with code '${code}' does not exist!`);
    })
    .catch(err => next(err));
  }
)

router.post('/',
  validatorHandlerGen(sedesSchema, 'body'),
  async (req, res, next) => {
    sedesModel.insertMany([req.body]).then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

router.put('/:code',
  validatorHandlerGen(sedesFindOneSchema, 'params'),
  validatorHandlerGen(sedesEditSchema, 'body'),
  async (req, res, next) => {
    const { code } = req.params;
    const body = req.body;
    sedesModel.findOne({code}).then( data => {
      if (!data)
        throw boom.notFound(`Sede with code '${code}' does not exist!`);
      else
        sedesModel.updateOne({code}, body).then(data => {
          res.json(data);
        }).catch(err => next(err));
    })
    .catch(err => next(err));
  }
)

router.delete('/:code',
  validatorHandlerGen(sedesFindOneSchema, 'params'),
  async (req, res, next) => {
    const { code } = req.params;
    sedesModel.deleteOne({code}).then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

module.exports = router