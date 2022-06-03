const cepModels = require('../models/cep');

const getCep = (cep = null) => {
  if (!cep) return cepModels.getAllCeps();

  return cepModels.getCepByCep(cep);
} 

const addCep = (cep, logradouro, bairro, localidade, uf) => cepModels.addCep(cep, logradouro, bairro, localidade, uf);

module.exports = {
  getCep,
  addCep,
}