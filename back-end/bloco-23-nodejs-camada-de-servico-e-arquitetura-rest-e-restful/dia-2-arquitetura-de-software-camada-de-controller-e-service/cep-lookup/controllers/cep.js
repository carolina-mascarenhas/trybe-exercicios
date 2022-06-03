const express = require('express');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.get('/:cep', middlewares.cepValidation, (req, res) => {

});

module.exports = routes;