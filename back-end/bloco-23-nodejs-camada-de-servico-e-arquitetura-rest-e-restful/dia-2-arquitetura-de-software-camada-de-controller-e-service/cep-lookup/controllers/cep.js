const express = require('express');
const middlewares = require('../middlewares');
const cepServices = require('../services/cep');

const routes = express.Router();

routes.get('/:cep', middlewares.paramsValidation, async (req, res) => {
  const { cep } = req.params;

  const [getCep] = await cepServices.getCep(cep);

  if (!getCep) return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } })

  res.status(200).json(getCep)
});

routes.post('/', middlewares.cepValidation, async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const addCep = await cepServices.addCep(cep, logradouro, bairro, localidade, uf);
  res.status(201).json(addCep);
});

module.exports = routes;