const express = require('express');
const validatorHandlerGen = require('../middlewares/validation.handler.gen');
const { paginatorSchemaPaginator } = require('../schemas/paginator.schema');
const userModel = require('./../models/user.model');

const router = express.Router();

router.get('/',
  validatorHandlerGen(paginatorSchemaPaginator, 'query'),
  async (req, res) => {
    userModel.find().then( data => {
      res.json({data, msg: 'ok'});
    })
    .catch(err => {
      res.json({msg:'error'});
    })
  }
)

module.exports = router