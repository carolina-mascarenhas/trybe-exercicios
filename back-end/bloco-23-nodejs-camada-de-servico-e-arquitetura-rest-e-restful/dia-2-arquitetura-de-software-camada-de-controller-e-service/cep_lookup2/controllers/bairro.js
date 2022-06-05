const express = require('express');
// const middlewares = require('../middlewares');
const bairroServices = require('../services/bairro');

const routes = express.Router();

routes.post('/', async (req, res) => {
  const { bairro, localidade, uf, ceps } = req.body;

  const addNewBairro = await bairroServices.add(bairro, localidade, uf, ceps);
  res.status(201).json(addNewBairro);
});

module.exports = routes;