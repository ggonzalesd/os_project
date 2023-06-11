const express = require('express');
const usersRouter = require('./users.route');
const assistantsRouter = require('./assistants.route');
const clothesRouter = require('./clothes.route');
const sedesRouter = require('./sedes.route');

const router = express.Router();

router.use('/users', usersRouter);
router.use('/assistants', assistantsRouter);
router.use('/clothes', clothesRouter);
router.use('/sedes', sedesRouter);

module.exports = router;