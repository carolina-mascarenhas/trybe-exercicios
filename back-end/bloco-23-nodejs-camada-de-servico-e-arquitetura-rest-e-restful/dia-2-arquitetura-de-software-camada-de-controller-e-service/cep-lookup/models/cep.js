const connection = require('./connection');

const getAllCeps = () => connection.execute('SELECT * FROM ceps;');

const getCepByCep = (cep) => connection.execute('SELECT * FROM ceps WHERE cep = ?;', [cep]);

const addCep = async (cep, logradouro, bairro, localidade, uf) => {
  const query = 'INSERT INTO ceps(cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  };
}

module.exports = {
  getAllCeps,
  getCepByCep,
  addCep,
}