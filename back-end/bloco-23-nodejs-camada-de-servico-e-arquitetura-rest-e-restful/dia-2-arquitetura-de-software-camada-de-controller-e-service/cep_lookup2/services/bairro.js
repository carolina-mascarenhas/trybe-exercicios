const bairroModels = require('../models/bairro');
const cepModels = require('../models/cep');

const add = async (bairro, localidade, uf, ceps) => {
  const { id } = await bairroModels.add(bairro, localidade, uf);

  const insertedCepPromises = [];
  ceps.map((cep) => {
    insertedCepPromises.push(cepModels.addCep(
      cep.cep,
      cep.logradouro,
      id
    ))
  })

  const [insertedCep] = await Promise.all(insertedCepPromises);
  console.log(insertedCep);

  return {
    cep:insertedCep.cep,
    logradouro:insertedCep.logradouro,
    bairro,
    localidade,
    uf,
  };
  // {
  //   "cep": "01001-000",
  //   "logradouro": "Praça da Sé",
  //   "bairro": "Sé",
  //   "localidade": "São Paulo",
  //   "uf": "SP",
  // }
} 

module.exports = {
  add,
}