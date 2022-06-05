const connection = require('./connection');

const getAllCeps = () => {
  const query = `SELECT cep, logradouro, bairro, localidade, uf
  FROM ceps AS ceps
  INNER JOIN bairros AS bairros
  ON ceps.bairro_id = bairros.id;`

  return connection.execute(query);
}

const getCepByCep = (cep) => {
  const query = `SELECT cep, logradouro, bairro, localidade, uf
  FROM cep_lookup2.ceps AS ceps
  INNER JOIN cep_lookup2.bairros AS bairros
  ON ceps.bairro_id = bairros.id
  WHERE cep = ?;`

  return connection.execute(query, [cep]);
}

const addCep = async (cep, logradouro, bairroId) => {
  const query = 'INSERT INTO ceps(cep, logradouro, bairro_id) VALUES (?, ?, ?)';
  await connection.execute(query, [cep, logradouro, bairroId]);

  return {
    cep,
    logradouro,
    bairroId
  };
}

module.exports = {
  getAllCeps,
  getCepByCep,
  addCep,
}