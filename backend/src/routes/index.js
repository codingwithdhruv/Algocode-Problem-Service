const express = require('express');

const v1Router = require('./v1'); // Make sure this path is correct

const apiRouter = express.Router();

apiRouter.use('/v1', v1Router)

module.exports = apiRouter;