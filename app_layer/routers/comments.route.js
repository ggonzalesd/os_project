const express = require('express');
const boom = require('@hapi/boom');
const commentsModel = require('./../models/comments.model');
const usersModel = require('./../models/user.model');
const validatorHandlerGen = require('../middlewares/validation.handler.gen');
const { paginatorSchemaPaginator } = require('../schemas/paginator.schema');
const { commentSchema, commentFindOneSchema, commentEditSchema } = require('./../schemas/comments.schema');

const router = express.Router();

router.get('/',
  validatorHandlerGen(paginatorSchemaPaginator, 'query'),
  async (req, res, next) => {
    commentsModel.find().then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

router.get('/:_id',
  validatorHandlerGen(commentFindOneSchema, 'params'),
  async(req, res, next) => {
    const { _id } = req.params; 
    commentsModel.findOne({_id}).then( data => {
      if (data)
        res.json(data);
      else
        throw boom.notFound(`Comment with id '${_id}' does not exist!`);
    })
    .catch(err => next(err));
  }
)

router.post('/',
  validatorHandlerGen(commentSchema, 'body'),
  async (req, res, next) => {
    const { dni } = req.body;
    usersModel.findOne({dni}).then( data => {
      if (data) {
        commentsModel.insertMany([req.body]).then( data => {
          res.json(data);
        })
        .catch(err => next(err));
      } else {
        throw boom.notFound(`User with dni '${dni}' does not exist!`);
      }
    })
    .catch(err => next(err));
  }
)

router.put('/:_id',
  validatorHandlerGen(commentFindOneSchema, 'params'),
  validatorHandlerGen(commentEditSchema, 'body'),
  async (req, res, next) => {
    const { _id } = req.params;
    const body = req.body;
    commentsModel.findOne({_id}).then( data => {
      if (!data)
        throw boom.notFound(`Comment with id '${_id}' does not exist!`);
      else
      commentsModel.updateOne({_id}, body).then(data => {
          res.json(data);
        }).catch(err => next(err));
    })
    .catch(err => next(err));
  }
)

router.delete('/:_id',
  validatorHandlerGen(commentFindOneSchema, 'params'),
  async (req, res, next) => {
    const { _id } = req.params;
    commentsModel.deleteOne({_id}).then( data => {
      res.json(data);
    })
    .catch(err => next(err));
  }
)

module.exports = router