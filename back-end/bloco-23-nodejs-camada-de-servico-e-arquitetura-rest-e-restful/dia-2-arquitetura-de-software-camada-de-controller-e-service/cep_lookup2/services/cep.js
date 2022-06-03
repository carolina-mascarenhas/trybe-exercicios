const cepModels = require('../models/cep');

const getCep = (cep = null) => {
  if (!cep) return cepModels.getAllCeps();

  return cepModels.getCepByCep(cep);
} 

const addCep = async (cep, logradouro, bairro, localidade, uf) => {
  const [checkCep] = await cepModels.getCepByCep(cep);

  // console.log('here:', checkCep);
  if (checkCep.length !== 0) throw new Error('CEP já existente');

  return cepModels.addCep(cep, logradouro, bairro, localidade, uf);
}

module.exports = {
  getCep,
  addCep,
}