const cepModels = require('../models/cep');

const getCep = (cep) => cepModels.getCep(cep);

const addCep = (cep, logradouro, bairro, localidade, uf) => cepModels.addCep(cep, logradouro, bairro, localidade, uf);

module.exports = {
  getCep,
  addCep,
}