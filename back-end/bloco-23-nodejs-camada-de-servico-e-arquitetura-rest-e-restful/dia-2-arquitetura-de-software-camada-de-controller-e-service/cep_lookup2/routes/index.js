const express = require('express');
const middleware = require('../middlewares');

const routes = express.Router();

routes.use('/cep', require('../controllers/cep'));

routes.use('/bairro', require('../controllers/bairro'));

routes.use(middleware.errorHandler);

module.exports = routes;